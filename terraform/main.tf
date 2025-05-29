provider "aws" {
  region                  = "us-east-1"
  access_key              = ${{ secrets.AWS_ACCESS_KEY_ID }}
  secret_key              = ${{ secrets.AWS_SECRET_ACCESS_KEY }}
}

resource "aws_instance" "example" {
  ami           = "ami-0c02fb55956c7d316" # Amazon Linux 2 (us-east-1)
  instance_type = "t2.micro"

  tags = {
    Name = "MyEC2Instance"
  }
}

output "instance_ip" {
  value = aws_instance.example.public_ip
}
