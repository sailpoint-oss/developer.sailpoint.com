---
id: connector-spec
title: Connector Specification File
pagination_label: Connector Spec File
sidebar_label: Connector Spec File
sidebar_position: 4
sidebar_class_name: connectorSpecFile
keywords: ['connectivity', 'connectors', 'spec', 'specification']
description: The connector spec file tells IDN how the connector should interact between IDN and the custom connector. It is the glue between IDN and the connector, so understanding the different sections are key to understanding how to build a custom connectors.
slug: /docs/saas-connectivity/connector-spec
tags: ['Connectivity']
---

## Summary

The connector spec file tells IDN how the connector should interact between IDN and the custom connector. It is the glue between IDN and the connector, so understanding the different sections are key to understanding how to build a custom connectors.

## Sample File

To see a sample spec file, see this link: [connector-spec.json](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json)

## Description of Fields

The following describes in detail the different fields in the connector spec:

- **name:** The name of the connector as it appears in IDN. Tags can be appended to this name.

- **keyType:** Either “simple” or “compound” This determines which type of key your connector expects to receive and send back for each of the commands. This must always be indicated in your connector spec - the connector returns the correct type for each command that returns a key type.

  - For example, the stdAccountRead command input is the StdAccountReadInput. if you select keyType as “simple,” then the StdAccountReadInput.key will be the type SimpleKey.

- **commands:** The list of commands the connector supports. A full list of available commands can be found [here](../connector-commands/index.md).
- **[sourceConfigInitialValues](./connector-spec/initial-value):** Key value pair of source config item keys and the default value that should be associated with them.
- **sourceConfig** A list of configuration items you must provide when you create a source in IDN. The order of these items is preserved in the UI.
  - **type:** This is always “menu” - it indicates a new menu for the sidebar. You can have multiple sections defined for complex connector configurations
  - **label:** This label indicates the text that will show up on the sidebar in IDN
  - **items:** The array of items in the menu
    - **type:** This is always "section" - it indicates a new section on the page
    - **sectionTitle:** The large text title that will display for the section.
    - **sectionHelpMessage:** A description about the section that can help the user understand what it is used for and how to fill out the fields
    - **docLinkLabel:** An optional field that is the text that displays next to documentation help link.
    - **docLink:** The optional link that the docLinkLabel will direct to if clicked.
      - **key:** The name of the configuration item as it is referenced in code.
      - **label:** The name of the configuration item as it appears in the UI.
      - **required** (Optional): Set to 'false' by default. Valid values are 'true' or 'false.' You must populate required configuration items in the IDN source configuration wizard before continuing.
      - **type:** The configuration items' types. The following types are valid:
        - text
        - number
        - secret
        - textarea
        - secrettextarea
        - checkbox
        - url
        - [radio](./connector-spec/radio)
        - [select](./connector-spec/select)
        - toggle
        - [list](./connector-spec/list)
        - [keyValue](./connector-spec/key-value)
        - [cardList](./connector-spec/card)
- **accountSchema:** The schema for an account in IDN populated by data from the source.
  - **displayAttribute:** Identifies the attribute (defined below) used to map to `Account Name` in the IdentityNow account schema. This should be a unique value even though it is not required because the connector will use this value to correlate accounts in IDN to accounts in the source system.
  - **identityAttribute:** Identifies the attribute (defined below) used to map to `Account ID` in the IdentityNow account schema. This must be a globally unique identifier, such as email address, employee ID, etc.
  - **groupAttribute:** Identifies the attribute used to map accounts to entitlements. For example, a web service can define `groups` that users are members of, and the `groups` grant entitlements to each user. In this case, **groupAttribute** is “groups,” and there is also an account attribute called “groups”.
  - **attributes:** One or more attributes that map to a user’s attribute on the target source. Each attribute defines the following:
    - **name:** The attribute’s name as it appears in IDN.
    - **type:** The attribute’s type. Possible values are `string`, `boolean`, `long`, and `int`.
    - **description:** A helpful description of the attribute. This is useful to source owners when they are trying to understand the account schema.
    - **managed:** This indicates whether the entitlements are manageable through IDN or read-only.
    - **entitlement:** This boolean indicates whether the attribute is an entitlement. Entitlements give identities privileges on the source system. Use this indication to determine which fields to synchronize with accounts in IDN for tasks such as separation of duties and role assignment. The boolean indicates whether the attribute is an entitlement.
    - **multi:** This indicates entitlements that are stored in an array format. This one field can store multiple entitlements for a single account.
- **entitlementSchemas:** A list of entitlement schemas in IDN populated by data from the source.
  - **type:** The entitlement’s type. Currently, only `group` is supported.
  - **displayAttribute:** The entitlement attribute’s name. This can be the `name` or another human friendly identifier for a group.
  - **identityAttribute:** The entitlement attribute’s unique ID. This can be the `id` or another unique key for a group.
  - **attributes:** The entitlement’s list of attributes. This list of attributes is an example: `id`, `name`, and `description`.
    - **name:** The name of the attribute as it appears in IDN.
    - **type:** The attribute’s type. Possible values are `string`, `boolean`, `long`, and `int`.
    - **description:** A helpful description the attribute. This is useful to source owners when they are trying to understand the account schema.
- **accountCreateTemplate:** A map of identity attributes IDN will pass to the connector to create an account in the target source.
  - **key:** The unique identifier of the attribute. This is also the name that is presented in the Create Profile screen in IDN.
  - **label:** A friendly name for presentation purposes.
  - **type:** The attribute’s type. Possible values are `string`, `boolean`, `long`, and `int`.
  - **initialValue (Optional):** Use this to specify identitAttribute mapping, generator or default values.
    - **type:** The initial value type. Possible values are `identityAttribute`, `generator`, `static`.
    - **attributes:** Attributes change depending on the type selected.
      - **name:** Use this to identify the mapping for identityAttribute type, or the generator to use (`Create Password`, `Create Unique Account ID`).
      - **value:** Use this as the default value for the static type.
      - **maxSize:** Use this for the Create Unique Account ID generator type. This value specifies the maximum size of the username to be generated.
      - **maxUniqueChecks:** Use this for the Create Unique Account ID generator type. This value specifies the maximum retries in case a unique ID is not found with the first random generated user.
      - **template:** Use this for the Create Unique Account ID generator type. This value specifies the template used for generation. Example: `"$(firstname).$(lastname)$(uniqueCounter)"`.
    - **required (Optional):** Determines whether the account create operation requires this attribute. It defaults to `false`. If it is `true` and IdentityNow encounters an identity missing this attribute, IDN does not send the account to the connector for account creation.
