import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
// const bucket = new aws.s3.Bucket("my-bucket");

// Export the name of the bucket
// export const bucketName = bucket.id;

const vpc = new awsx.ec2.Vpc("pulumi-vpc", {
  subnetSpecs: [
    {
      type: awsx.ec2.SubnetType.Public,
      cidrMask: 24,
    },
    {
      type: awsx.ec2.SubnetType.Private,
      cidrMask: 24,
    },
  ],
  natGateways: {
    strategy: awsx.ec2.NatGatewayStrategy.None,
  },
});
