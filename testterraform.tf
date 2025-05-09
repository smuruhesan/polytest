# main.tf

provider "github" {
  token = "asdadgsdrwerwevqwfvwqeweq"
  owner = "your-github-username"
}

resource "github_repository" "example" {
  name        = "sample-terraform-repo"
  description = "A test repo created using Terraform"
  private     = true
  auto_init   = true
}
