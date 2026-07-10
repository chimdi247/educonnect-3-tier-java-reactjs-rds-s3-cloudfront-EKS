data "aws_acm_certificate" "my_cert" {
  domain = "*.vhbj.site"
  most_recent = true
  statuses = ["ISSUED"]
}
