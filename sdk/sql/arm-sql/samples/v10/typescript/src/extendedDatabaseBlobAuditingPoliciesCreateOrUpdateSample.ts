/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ExtendedDatabaseBlobAuditingPolicy,
  SqlManagementClient
} from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an extended database's blob auditing policy.
 *
 * @summary Creates or updates an extended database's blob auditing policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ExtendedDatabaseAzureMonitorAuditingCreateMin.json
 */
async function createOrUpdateAnExtendedDatabaseAzureMonitorAuditingPolicyWithMinimalParameters() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "blobauditingtest-4799";
  const serverName = "blobauditingtest-6440";
  const databaseName = "testdb";
  const parameters: ExtendedDatabaseBlobAuditingPolicy = {
    isAzureMonitorTargetEnabled: true,
    state: "Enabled"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.extendedDatabaseBlobAuditingPolicies.createOrUpdate(
    resourceGroupName,
    serverName,
    databaseName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an extended database's blob auditing policy.
 *
 * @summary Creates or updates an extended database's blob auditing policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ExtendedDatabaseBlobAuditingCreateMax.json
 */
async function createOrUpdateAnExtendedDatabaseBlobAuditingPolicyWithAllParameters() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "blobauditingtest-4799";
  const serverName = "blobauditingtest-6440";
  const databaseName = "testdb";
  const parameters: ExtendedDatabaseBlobAuditingPolicy = {
    auditActionsAndGroups: [
      "DATABASE_LOGOUT_GROUP",
      "DATABASE_ROLE_MEMBER_CHANGE_GROUP",
      "UPDATE on database::TestDatabaseName by public"
    ],
    isAzureMonitorTargetEnabled: true,
    isStorageSecondaryKeyInUse: false,
    predicateExpression: "statement = 'select 1'",
    queueDelayMs: 4000,
    retentionDays: 6,
    state: "Enabled",
    storageAccountAccessKey:
      "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==",
    storageAccountSubscriptionId: "00000000-1234-0000-5678-000000000000",
    storageEndpoint: "https://mystorage.blob.core.windows.net"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.extendedDatabaseBlobAuditingPolicies.createOrUpdate(
    resourceGroupName,
    serverName,
    databaseName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an extended database's blob auditing policy.
 *
 * @summary Creates or updates an extended database's blob auditing policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ExtendedDatabaseBlobAuditingCreateMin.json
 */
async function createOrUpdateAnExtendedDatabaseBlobAuditingPolicyWithMinimalParameters() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "blobauditingtest-4799";
  const serverName = "blobauditingtest-6440";
  const databaseName = "testdb";
  const parameters: ExtendedDatabaseBlobAuditingPolicy = {
    state: "Enabled",
    storageAccountAccessKey:
      "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==",
    storageEndpoint: "https://mystorage.blob.core.windows.net"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.extendedDatabaseBlobAuditingPolicies.createOrUpdate(
    resourceGroupName,
    serverName,
    databaseName,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateAnExtendedDatabaseAzureMonitorAuditingPolicyWithMinimalParameters();
  createOrUpdateAnExtendedDatabaseBlobAuditingPolicyWithAllParameters();
  createOrUpdateAnExtendedDatabaseBlobAuditingPolicyWithMinimalParameters();
}

main().catch(console.error);