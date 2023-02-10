import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_kQ79SKhVf",
    ClientId: "5lhkva3203oem5ueanqr5alemq",
}

export default new CognitoUserPool(poolData);