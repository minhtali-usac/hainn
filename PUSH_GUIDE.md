# Hướng dẫn push code lên GitHub (minhtali-usac/hainn)

## Bước 1: Tạo Personal Access Token trên GitHub
1. Đăng nhập GitHub bằng tài khoản có quyền ghi vào `minhtali-usac/hainn`.
2. Mở https://github.com/settings/tokens, chọn **Generate new token → Generate new token (classic)**.
3. Note: `hainn-website`. Expiration: tuỳ bạn (ví dụ 90 ngày). Tick ô **`repo`**.
4. Bấm **Generate token** rồi **copy ngay** chuỗi `ghp_...` (chỉ hiện một lần).

## Bước 2: Cấu hình git (chỉ cần làm 1 lần)

```bash
cd /Users/hainn/Work/website/hainn-main

# Nhờ macOS Keychain nhớ token để lần sau khỏi nhập lại
git config --global credential.helper osxkeychain

# Khai báo tên/email cho commit (sửa lại tên/email của bạn)
git config --global user.name "Hai Nguyen"
git config --global user.email "hai10hoalk@icloud.com"
```

## Bước 3: Push lần đầu (sửa lại author của commit cũ nếu cần)

```bash
git commit --amend --reset-author --no-edit
git push origin main
```

Khi git hỏi:
- `Username for 'https://github.com':` → nhập username GitHub của bạn.
- `Password for ...:` → **dán token** `ghp_...` (không phải mật khẩu GitHub). Gõ xong không hiện ký tự nào, cứ Enter.

Push thành công sẽ thấy dòng dạng: `85c478a..xxxxxxx  main -> main`.

## Từ những lần sau: quy trình push thường ngày

```bash
git add -A
git commit -m "Mô tả thay đổi"
git push
```

## Xử lý lỗi thường gặp

- **403 / Permission denied**: tài khoản không có quyền ghi vào repo, hoặc token thiếu quyền `repo`. Nhờ chủ repo thêm bạn làm collaborator.
- **rejected ... fetch first**: có người vừa đẩy thay đổi lên GitHub trước. Chạy:
  ```bash
  git pull --rebase origin main
  git push
  ```
- **Keychain lưu nhầm token cũ**: mở app **Keychain Access** trên macOS, tìm mục `github.com`, xoá nó rồi push lại (git sẽ hỏi token mới).

## Thay thế: dùng SSH (nếu không muốn nhập token mỗi lần)

```bash
ssh-keygen -t ed25519 -C "hai10hoalk@icloud.com"
cat ~/.ssh/id_ed25519.pub
```
Copy nội dung in ra, thêm vào https://github.com/settings/keys, sau đó:
```bash
git remote set-url origin git@github.com:minhtali-usac/hainn.git
git push origin main
```
