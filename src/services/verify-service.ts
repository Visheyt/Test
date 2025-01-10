export class VerifyService {
  private isVerify: boolean = false;

  public getIsVerify() {
    return this.isVerify;
  }

  public verify() {
    this.isVerify = true;
  }
}

export const verifyService = new VerifyService();
