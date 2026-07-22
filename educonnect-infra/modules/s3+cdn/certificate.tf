data "aws_acm_certificate" "my_cert" {
  domain = "*.wsedf.online"
  most_recent = true
  statuses = ["ISSUED"]
}
