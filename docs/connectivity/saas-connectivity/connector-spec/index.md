---
id: connector-spec
title: Connector Specification File
pagination_label: Connector Spec File
sidebar_label: Connector Spec File
sidebar_position: 4
sidebar_class_name: connectorSpecFile
keywords: ['connectivity', 'connectors', 'spec', 'specification']
description: The connector spec file tells SHF how the connector should interact between SHF and the custom connector. It is the glue between SHF and the connector, so understanding the different sections are key to understanding how to build a custom connectors.
slug: /connectivity/saas-connectivity/connector-spec
tags: ['Connectivity']
---

## Summary

The connector spec file tells SHF how the connector should interact between SHF and the custom connector. It is the glue between SHF and the connector, so understanding the different sections are important to understand when building a custom connector.

For a complete example, see [connector-spec.json](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json).

## Top-Level Fields

| Property | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | The name of the connector as it appears in SHF. Tags can be appended to this name. |
| `keyType` | string | Yes | Either `simple` or `compound`. Determines which key type the connector expects to receive and send back for each command. For example, if `simple`, then `StdAccountReadInput.key` will be of type `SimpleKey`. |
| `commands` | string[] | Yes | The list of commands the connector supports. See the full list of [available commands](../connector-commands/index.md). |
| `supportsStatefulCommands` | boolean | No | Set to `true` if the connector supports stateful commands. |
| `showDebugLoggingOption` | boolean | No | When `true`, exposes an **Enable Debug Logging** toggle in the SHF source's Administrator Settings UI. When enabled, the connector emits `debug`-level log entries in addition to `info` and `error` levels. Defaults to `false`. |
| `sourceConfigInitialValues` | object | No | Key-value pairs of source config item keys and their default values. See [Initial Values](./connector-spec/initial-value). |
| `sourceConfig` | object[] | Yes | A list of menus defining the configuration UI shown when creating a source in SHF. The order of items is preserved in the UI. See [sourceConfig](#sourceconfig). |
| `accountSchema` | object | Yes | The schema for accounts in SHF populated by data from the source. See [accountSchema](#accountschema). |
| `entitlementSchemas` | object[] | No | A list of entitlement schemas in SHF populated by data from the source. See [entitlementSchemas](#entitlementschemas). |
| `accountCreateTemplate` | object | No | A map of identity attributes SHF passes to the connector when creating an account in the target source. See [accountCreateTemplate](#accountcreatetemplate). |

---

## sourceConfig

`sourceConfig` is an array of menu objects that define the sidebar and configuration fields shown when creating a source in SHF.

### Menu

| Property | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | Always `"menu"`. Indicates a new sidebar section. Multiple menus can be defined for complex configurations. |
| `label` | string | Yes | The text displayed on the sidebar in SHF. |
| `items` | [Section](#section)[] | Yes | An array of section objects displayed within this menu. |

### Section

| Property | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | Always `"section"`. |
| `sectionTitle` | string | Yes | The large text title displayed for the section. |
| `sectionHelpMessage` | string | No | A description to help users understand the section and how to fill out its fields. |
| `docLinkLabel` | string | No | The text displayed next to the documentation help link. |
| `docLink` | string | No | The URL the `docLinkLabel` directs to when clicked. |
| `items` | [Config Item](#config-item)[] | Yes | An array of input field objects within the section. |

### Config Item

| Property | Type | Required | Description |
|---|---|---|---|
| `key` | string | Yes | The name of the configuration item as referenced in code. |
| `label` | string | Yes | The name of the configuration item as displayed in the UI. |
| `type` | string | Yes | The input type. See [valid types](#valid-type-values) below. |
| `required` | boolean | No | Whether the field must be populated before continuing. Defaults to `false`. |
| `parentKey` | string | No | The `key` of another field this field depends on. The field is hidden until the parent field has the expected value. |
| `parentValue` | string | No | The value `parentKey` must have for this field to become visible. |
| `placeholder` | string | No | Placeholder text shown inside the input field. |
| `helpKey` | string | No | Help text shown alongside the input field. |

#### Valid `type` values

| Type | Description |
|---|---|
| `text` | Single-line text input |
| `number` | Numeric input |
| `secret` | Masked text input |
| `textarea` | Multi-line text input |
| `secrettextarea` | Masked multi-line text input |
| `checkbox` | Boolean checkbox |
| `url` | URL input |
| `toggle` | Boolean toggle |
| [`radio`](./connector-spec/radio) | Radio button group with optional field dependencies |
| [`select`](./connector-spec/select) | Dropdown selector with optional field dependencies |
| [`list`](./connector-spec/list) | Multi-item list input |
| [`keyValue`](./connector-spec/key-value) | Key-value pair input |
| [`cardList`](./connector-spec/card) | Dynamic card-based input with add/copy/delete actions |

---

## accountSchema

Defines the schema for accounts in SHF populated by data from the source.

### accountSchema Fields

| Property | Type | Required | Description |
|---|---|---|---|
| `displayAttribute` | string | Yes | The attribute used to map to `Account Name` in SHF. Should be unique so SHF can correlate accounts between SHF and the source. |
| `identityAttribute` | string | Yes | The attribute used to map to `Account ID` in SHF. Must be a globally unique identifier (e.g., email address, employee ID). |
| `groupAttribute` | string | No | The attribute used to map accounts to entitlements (e.g., `"groups"`). |
| `attributes` | [Account Attribute](#account-attribute)[] | Yes | One or more attributes mapping to user attributes on the target source. |

### Account Attribute

| Property | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | The attribute's name as it appears in SHF. |
| `type` | string | Yes | The attribute's data type. Valid values: `string`, `boolean`, `long`, `int`. |
| `description` | string | No | A helpful description of the attribute, useful to source owners reviewing the account schema. |
| `entitlement` | boolean | No | Whether this attribute is an entitlement. Entitlements grant identities privileges on the source system. |
| `managed` | boolean | No | Whether the entitlements are manageable through SHF (`true`) or read-only (`false`). |
| `multi` | boolean | No | Whether this attribute stores multiple entitlements in an array format. |

---

## entitlementSchemas

An array of entitlement schema objects defining the entitlement types available from the source.

### Entitlement Schema

| Property | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | The entitlement type. Currently only `"group"` is supported. |
| `displayAttribute` | string | Yes | The attribute used as the human-friendly display name for the entitlement (e.g., `name`). |
| `identityAttribute` | string | Yes | The attribute used as the unique identifier for the entitlement (e.g., `id`). |
| `attributes` | [Entitlement Attribute](#entitlement-attribute)[] | Yes | The list of attributes on the entitlement schema. |

### Entitlement Attribute

| Property | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | The attribute's name as it appears in SHF. |
| `type` | string | Yes | The attribute's data type. Valid values: `string`, `boolean`, `long`, `int`. |
| `description` | string | No | A helpful description of the attribute, useful to source owners reviewing the entitlement schema. |

---

## accountCreateTemplate

Maps identity attributes SHF will pass to the connector when creating an account in the target source.

### accountCreateTemplate Fields

| Property | Type | Required | Description |
|---|---|---|---|
| `fields` | [Create Template Field](#create-template-field)[] | Yes | An array of field definitions for account creation. |

### Create Template Field

| Property | Type | Required | Description |
|---|---|---|---|
| `key` | string | Yes | The unique identifier for the attribute. Also the name shown in the Create Profile screen in SHF. |
| `label` | string | Yes | A friendly display name for the attribute. |
| `type` | string | Yes | The attribute's data type. Valid values: `string`, `boolean`, `long`, `int`. |
| `required` | boolean | No | Whether this attribute is required for account creation. If `true` and SHF encounters an identity missing this attribute, the account will not be sent to the connector for creation. Defaults to `false`. |
| `initialValue` | [Initial Value](#initial-value) | No | Specifies a default, identity-mapped, or generated value for the attribute. |

### Initial Value

| Property | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | The value source type. Valid values: `identityAttribute`, `generator`, `static`. |
| `attributes` | object | Yes | Attributes specific to the chosen type. See the tables below. |

#### `identityAttribute` attributes

| Property | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | The identity attribute to map from (e.g., `"email"`, `"uid"`). |

#### `generator` attributes

| Property | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | The generator to use. Valid values: `"Create Password"`, `"Create Unique Account ID"`. |
| `maxSize` | integer | No | (`Create Unique Account ID` only) Maximum length of the generated username. |
| `maxUniqueChecks` | integer | No | (`Create Unique Account ID` only) Maximum number of retries if a unique ID is not generated on the first attempt. |
| `template` | string | No | (`Create Unique Account ID` only) Template used for generation (e.g., `"$(firstname).$(lastname)$(uniqueCounter)"`). |

#### `static` attributes

| Property | Type | Required | Description |
|---|---|---|---|
| `value` | string | Yes | The static default value to use. |
