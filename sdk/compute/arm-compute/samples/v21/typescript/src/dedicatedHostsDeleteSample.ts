/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a dedicated host.
 *
 * @summary Delete a dedicated host.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/dedicatedHostExamples/DedicatedHost_Delete_MaximumSet_Gen.json
 */
async function dedicatedHostDeleteMaximumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const hostGroupName = "aaaaaa";
  const hostName = "aaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.dedicatedHosts.beginDeleteAndWait(
    resourceGroupName,
    hostGroupName,
    hostName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Delete a dedicated host.
 *
 * @summary Delete a dedicated host.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/dedicatedHostExamples/DedicatedHost_Delete_MinimumSet_Gen.json
 */
async function dedicatedHostDeleteMinimumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const hostGroupName = "aaaaaaaaaaaaaaa";
  const hostName = "aaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.dedicatedHosts.beginDeleteAndWait(
    resourceGroupName,
    hostGroupName,
    hostName
  );
  console.log(result);
}

async function main() {
  dedicatedHostDeleteMaximumSetGen();
  dedicatedHostDeleteMinimumSetGen();
}

main().catch(console.error);