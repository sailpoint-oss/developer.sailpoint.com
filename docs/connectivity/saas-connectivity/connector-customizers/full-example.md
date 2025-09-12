---
id: connectivity-customizers-example
title: Example customizer code
pagination_label: Full Example
sidebar_label: Full Example
sidebar_position: 7
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: Full connectivity customizer example.
slug: /connectivity/saas-connectivity/customizers/example
tags: ['Connectivity']
---

# Full Example

This is a full example of a customizer with all commands provisioned:

```javascript
import {
    Context,
    createConnectorCustomizer,
    readConfig,
    logger,
    StdAccountReadInput,
    StdAccountReadOutput,
    StdTestConnectionOutput,
    StdAccountCreateInput,
    StdAccountCreateOutput,
    StdAccountUpdateInput,
    StdAccountUpdateOutput,
    StdAccountDeleteInput,
    StdAccountDeleteOutput,
    StdAccountEnableInput,
    StdAccountEnableOutput,
    StdAccountDisableInput,
    StdAccountDisableOutput,
    StdAccountUnlockInput,
    StdAccountUnlockOutput,
    StdAccountListInput,
    StdEntitlementReadInput,
    StdEntitlementReadOutput,
    StdEntitlementListInput,
    StdChangePasswordInput,
    StdChangePasswordOutput,
    StdSourceDataDiscoverInput,
    StdSourceDataDiscoverOutput,
    StdSourceDataReadInput,
    StdSourceDataReadOutput,
} from '@sailpoint/connector-sdk'

// Connector customizer must be exported as module property named connectorCustomizer
export const connectorCustomizer = async () => {

    // Get connector source config
    const config = await readConfig()

    return createConnectorCustomizer()
        .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {
            logger.info('Running after test connection')
            return output
        })
        .beforeStdTestConnection(async (context: Context, input: undefined) => {
            logger.info('Running before test connection')
        })
        .beforeStdAccountCreate(async (context: Context, input: StdAccountCreateInput) => {
            logger.info(`Running before account, for account ${input.identity}`)
            return input
        })
        .afterStdAccountCreate(async (context: Context, output: StdAccountCreateOutput) => {
            logger.info(`Running after account create for account ${output.identity}`)
            return output
        })
        .beforeStdAccountRead(async (context: Context, input: StdAccountReadInput) => {
            logger.info(`Running before account, for account ${input.identity}`)
            return input
        })
        .afterStdAccountRead(async (context: Context, output: StdAccountReadOutput) => {
            logger.info(`Running after account read for account ${output.identity}`)
            return output
        })
        .beforeStdAccountUpdate(async (context: Context, input: StdAccountUpdateInput) => {
            logger.info(`Running before account, for account ${input.identity}`)
            return input
        })
        .afterStdAccountUpdate(async (context: Context, output: StdAccountUpdateOutput) => {
            logger.info(`Running after account update for account ${output.identity}}`)
            return output
        })
        .beforeStdAccountDelete(async (context: Context, input: StdAccountDeleteInput) => {
            logger.info(`Running before account, for account ${input.identity}`)
            return input
        })
        .afterStdAccountDelete(async (context: Context, output: StdAccountDeleteOutput) => {
            logger.info(`Running after account delete`)
            return output
        })
        .beforeStdAccountEnable(async (context: Context, input: StdAccountEnableInput) => {
            logger.info(`Running before account, for account ${input.identity}`)
            return input
        })
        .afterStdAccountEnable(async (context: Context, output: StdAccountEnableOutput) => {
            logger.info(`Running after account enable for account ${output.identity}`)
            return output
        })
        .beforeStdAccountDisable(async (context: Context, input: StdAccountDisableInput) => {
            logger.info(`Running before account, for account ${input.identity}`)
            return input
        })
        .afterStdAccountDisable(async (context: Context, output: StdAccountDisableOutput) => {
            logger.info(`Running after account disable for account ${output.identity}`)
            return output
        })
        .beforeStdAccountUnlock(async (context: Context, input: StdAccountUnlockInput) => {
            logger.info(`Running before account, for account ${input.identity}`)
            return input
        })
        .afterStdAccountUnlock(async (context: Context, output: StdAccountUnlockOutput) => {
            logger.info(`Running after account unlock for account ${output.identity}`)
            return output
        })
        .beforeStdAccountList(async (context: Context, input: StdAccountListInput) => {
            logger.info(`Running before account list for account. State: ${input.state}`)
            return input
        })
        .beforeStdEntitlementRead(async (context: Context, input: StdEntitlementReadInput) => {
            logger.info(`Running before entitlement read for account ${input.identity}`)
            return input
        })
        .afterStdEntitlementRead(async (context: Context, output: StdEntitlementReadOutput) => {
            logger.info(`Running after entitlement read for account ${output.identity}`)
            return output
        })
        .beforeStdEntitlementList(async (context: Context, input: StdEntitlementListInput) => {
            logger.info(`Running before entitlement list for account. State ${input.state}`)
            return input
        })
        .beforeStdChangePassword(async (context: Context, input: StdChangePasswordInput) => {
            logger.info(`Running before change password for account ${input.identity}`)
            return input
        })
        .afterStdChangePassword(async (context: Context, output: StdChangePasswordOutput) => {
            logger.info(`Running after change password`)
            return output
        })
        .beforeStdSourceDataDiscover(async (context: Context, input: StdSourceDataDiscoverInput) => {
            logger.info(`Running before source data discover. Query: ${input.queryInput?.query}`)
            return input
        })
        .afterStdSourceDataDiscover(async (context: Context, output: StdSourceDataDiscoverOutput) => {
            logger.info(`Running after source data discover first record key: ${output[0].key}`)
            return output
        })
        .beforeStdSourceDataRead(async (context: Context, input: StdSourceDataReadInput) => {
            logger.info(`Running before source data read. Query: ${input.queryInput?.query}`)
            return input
        })
        .afterStdSourceDataRead(async (context: Context, output: StdSourceDataReadOutput) => {
            logger.info(`Running after source data read first query record key: ${output[0].key}`)
            return output
        })
        .customizedOperation('Operation Identifier', async (context: Context, input: any) => {
        logger.info(`Running customized code.`)
        return input
        })
}

```
