---
id: connector-spec
title: Connector Specification File
pagination_label: Connector Spec File
sidebar_label: Connector Spec File
sidebar_position: 4
sidebar_class_name: connectorSpecFile
keywords: ['connectivity', 'connectors', 'spec', 'specification']
description: The connector spec file tells IDN how the connector should interact between IDN and the custom connector. It is the glue between IDN and the connector, so understanding the different sections is key to understanding how to build a custom connectors.
slug: /docs/saas-connectivity/connector-spec
tags: ['Connectivity']
---

## Summary

The connector spec file tells IDN how the connector should interact with IDN. It's the glue between IDN and the connector, so understanding the different sections is key to understanding how to build a custom connectors.

## Sample File

To see a sample spec file, see this link: [connector-spec.json](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json)

## Field Descriptions

The following describes in detail the different fields in the connector spec:

- **name:** The name of the connector as it appears in IDN. You can append tags to this name.

- **keyType:** Either “simple” or “compound.” This determines which type of key your connector expects to receive and send back for each of the commands. This must always be indicated in your connector spec - the connector returns the correct type for each command that returns a key type.

  - For example, the stdAccountRead command input is the StdAccountReadInput. if you select keyType as “simple,” then the StdAccountReadInput.key will be the type SimpleKey.

- **commands:** The list of commands the connector supports. Refer to the [Connector Commands](https://developer.sailpoint.com/idn/docs/saas-connectivity/connector-commands) for a full list. 
- **sourceConfig** A list of configuration items you must provide when you create a source in IDN. The UI preserves these items' order. 
  - **type:** This is always “menu” - it indicates a new menu for the sidebar. You can have multiple sections defined for complex connector configurations.
  - **label:** This indicates the text that displays in the sidebar in IDN.
  - **items:** The array of items in the menu.
    - **type:** This is always "section" - it indicates a new section on the page.
    - **sectionTitle:** The large text title that displays for the section.
    - **sectionHelpMessage:** A description about the section that can help the user understand its purpose and how to fill out the fields.
      - **key:** The configuration item's name as the code references it.
      - **label:** The configuration item's name as it displays in the UI.
      - **required** (Optional): Set to 'false' by default. Valid values are `true` or `false`. You must populate required configuration items in the IDN source configuration wizard before continuing.
      - **type:** The configuration items' types. The following types are valid:
        - text
        - secret
        - url
        - email
        - number
        - checkbox
        - json
- **accountSchema:** The schema for an account in IDN populated by data from the source.
  - **displayAttribute:** Identifies the attribute (defined below) used to map to `Account Name` in the IdentityNow account schema. This should be a unique value even though it's not required because the connector uses this value to correlate accounts in IDN to accounts in the source system.
  - **identityAttribute:** Identifies the attribute (defined below) used to map to `Account ID` in the IdentityNow account schema. This must be a globally unique identifier, such as email address, employee ID, etc.
  - **groupAttribute:** Identifies the attribute used to map accounts to entitlements. For example, a web service can define `groups` that users are members of, and the `groups` grant entitlements to each user. In this case, **groupAttribute** is “groups,” and there is also an account attribute called “groups”.
  - **attributes:** One or more attributes that map to a user’s attribute on the target source. Each attribute defines the following:
    - **name:** The attribute’s name as it displays in IDN.
    - **type:** The attribute’s type. The following values are possible: `string`, `boolean`, `long`, and `int`.
    - **description:** A helpful description of the attribute. This is useful to source owners when they're trying to understand the account schema.
    - **managed:** This indicates whether the entitlements are manageable through IDN or read-only.
    - **entitlement:** This boolean indicates whether the attribute is an entitlement. Entitlements give identities privileges on the source system. Use this indication to determine which fields to synchronize with accounts in IDN for tasks such as separation of duties and role assignment. The boolean indicates whether the attribute is an entitlement.
    - **multi:** This indicates entitlements that are stored in an array format. This one field can store multiple entitlements for a single account.
- **entitlementSchemas:** A list of entitlement schemas in IDN populated by data from the source.
  - **type:** The entitlement’s type. Currently, only `group` is supported.
  - **displayAttribute:** The entitlement attribute’s name. This can be the `name` or another human friendly identifier for a group.
  - **identityAttribute:** The entitlement attribute’s unique ID. This can be the `id` or another unique key for a group.
  - **attributes:** The entitlement’s list of attributes. This list of attributes is an example: `id`, `name`, and `description`.
    - **name:** The name of the attribute as it appears in IDN.
    - **type:** The attribute’s type. The following values are possible: `string`, `boolean`, `long`, and `int`.
    - **description:** A helpful description the attribute. This is useful to source owners when they are trying to understand the account schema.
- **accountCreateTemplate:** A map of identity attributes IDN will pass to the connector to create an account in the target source.
  - **key:** The unique identifier of the attribute. This is also the name the Create Profile screen in IDN presents.
  - **label:** A user-friendly name for presentation purposes.
  - **type:** The attribute’s type. The following values are possible: `string`, `boolean`, `long`, and `int`.
  - **initialValue (Optional):** Use this to specify identitAttribute mapping, generator or default values.
    - **type:** The initial value type. Possible values are `identityAttribute`, `generator`, `static`.
    - **attributes:** Attributes change depending on the type selected.
      - **name:** Use this to identify the mapping for identityAttribute type, or the generator to use (`Create Password`, `Create Unique Account ID`).
      - **value:** Use this as the default value for the static type.
      - **maxSize:** Use this for the Create Unique Account ID generator type. This specifies the maximum size of the username to be generated.
      - **maxUniqueChecks:** Use this for the Create Unique Account ID generator type. This specifies the maximum retries in case a unique ID is not found with the first random generated user.
      - **template:** Use this for the Create Unique Account ID generator type. This specifies the template used for generation. Example: `"$(firstname).$(lastname)$(uniqueCounter)"`.
    - **required (Optional):** Determines whether the account create operation requires this attribute. It defaults to `false`. If it is `true` and IDN encounters an identity missing this attribute, IDN doesn't send the account to the connector for account creation.
