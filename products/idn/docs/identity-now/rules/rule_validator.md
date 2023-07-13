---
id: rule-validator
title: IdentityNow Rule Validator
pagination_label: IdentityNow Rule Validator
sidebar_label: IdentityNow Rule Validator
sidebar_position: 5
sidebar_class_name: ruleValidator
keywords: ['rule', 'validator']
description: IdentityNow Rule Validator
slug: /docs/rules/rule-validator
tags: ['Rules']
---

## Overview

The IdentityNow (IDN) Rule Validator is a simple tool you can use to validate IDN rules for malformed or incorrect code fragments and help make sure they conform to the SailPoint [IdentityNow Rule Guide](/idn/docs/rules#rule-guidelines) before rule submission. While this does check code fragments, it is not a code parser or linter - it does not check the code for syntax or completeness. This isn't designed to replace any sort of unit testing you might do outside IDN. Running the IDN Rule Validator against your rules before submission helps you find problems early on. It is designed to help catch common items that often trip up rule reviews and provide immediate feedback during the rule writing process. However this is not a guarantee that the rule will be approved or that they won't have any other falws. 

## Changelog

### Version 3.0

- BeanShell linter will now validate syntax and usage to help discover issues in your code before you deploy.
- There is now a watch option that continuously monitors and validate/lint your code while you develop.

### Version 2.0

- Migrated to a Java-based runtime
- Enhanced results reporting
- Ability to toggle warnings on/off as part of the results report
- File naming convention checks
- Handling for connector-executed rules

### Version 1.0.1

- Initial release!

## Requirements

This utility is a Java based application and requires **Java SE Development Kit (JDK) 11** or higher to run.

:::info
Note that the previous version used JDK 8 (1.8). If you do not have the JDK 11 or above, then you must download and install JDK 11 first. 
:::

## Support / Features

This utility is developed by SailPoint Technology Services, and its usage is covered via SailPoint Expert Services. If you have any issues, bugs, or feature requests, please submit them to [SailPoint Expert Services](https://www.sailpoint.com/services/professional/#contact-form).

## Installation and Updates

To use the Rule Validator locally, decompress the `sailpoint-saas-rule-validator-{3.0.xx}-distribution.zip` package into a folder on your workstation. The sp-rv command executes the java package, and has been designed to be run from a path so can be executed anywhere from your file system.

### Linux and MacOS Considerations

Under Linux and MacOS ensure the `sp-rv` script has execute privileges. To do so, execute the `chmod` command on the `sp-rv` script:

```bash
chmod +x sp-rv
```

## Run the Rule Validator

To run the validator with standard reporting, invoke this command:

```bash
sp-rv --file {path or file name}
```

This automatically validates all XML files in the path or a specific file name. To automatically include all nested sub-directories in the validation, include the `--recursive` flag.

```bash
sp-rv --file "~/path-to-rules" --recursive
```

:::info
If you provide a specific file name, then the `--recursive` flag parameter is ignored - the validator will only conduct the recursive evaluation if the filePath parameter is null or a directory.
:::

### Watch Option

The new rule validator contains a watch feature to monitor a folder for changes.

```bash
sp-rv --watch {path}
```

This will automatically validate all XML files within the specified path. The path must always be a directory and not a file.
To automatically include all nested sub-directories in the validation, include the `--recursive` flag.

```bash
sp-rv --watch "~/path-to-rules" --recursive
```

:::info
To exit watch mode, press `CTRL+C`.
:::

## Example Output

### Rule With No Errors but One Warning

```bash
________________________________________________________________________________
SailPoint SaaS Rule Validator v3.0.9-beta
By the SaaS Acceleration Team
​
(c)2022-23 SailPoint Technologies Inc
​
________________________________________________________________________________
Executed from: /Users/sailpoint/Documents/test rules
Jar location : /Users/sailpoint/Documents/tools
File name    : /Users/sailpoint/Documents/test rules/Rule - AttributeGenerator - Generate userPrincipalName.xml
Script name  : Generate userPrincipalName
Date         : Wed Mar 08 18:13:12 GMT 2023
​
________________________________________________________________________________
No errors found.
Warnings: 
  Line 126 - [LintBSHAmbiguousName] Could not find variable name 'calculatedUpnDomain ' 
​
________________________________________________________________________________
  Runtime stats:
    Started validation at 2023-03-08 06:13:12.558
    1 Rules Analyzed
    0 Errors
    1 Warnings
​
    Finished validation at:  2023-03-08 06:13:13.009
    Process completed in 0 seconds.
________________________________________________________________________________
```

### Failure With Warnings

```bash
SailPoint SaaS Rule Validator v3.0.9-beta
By the SaaS Acceleration Team
​
(c)2022-23 SailPoint Technologies Inc
​
________________________________________________________________________________
Executed from: /Users/sailpoint/Documents/test rules
Jar location : /Users/sailpoint/Documents/tools
File name    : /Users/sailpoint/Documents/test rules/Rule - Generic - WS_OGE_ID_Generation.xml
Script name  : WS_OGE_ID_Generation
Date         : Wed Mar 08 18:15:58 GMT 2023
​
________________________________________________________________________________
Errors: (2)
  Line 72 - [IDNLintProcessor] While statement detected: while ( ! isIDUnique && Util .isNotNullOrEmpty ( APPLICATION_ID ) && count <= 9 ) { .  .  While loops are disallowed due to infinite loop risks; use a 'for' loop with explicit exit conditions instead 
  Line 121 - [IDNLintProcessor] While statement detected: while ( ! isUnique && ( attempt <= MAX_ATTEMPTS ) ) { .  .  While loops are disallowed due to infinite loop risks; use a 'for' loop with explicit exit conditions instead 
​
Warnings: 
  Line 36 - [LintBSHMethodInvocation] No type was assigned or resolved for variable name: idn 
  Line 49 - [LintBSHTypedVariableDeclaration] Variable name 'ogeId' is shadowing an earlier variable declaration 
  Line 73 - [LintBSHTypedVariableDeclaration] Variable name 'sourceId' is shadowing an earlier variable declaration 
  Line 105 - [LintBSHTypedVariableDeclaration] Variable name 'ogeId' is shadowing an earlier variable declaration 
  Line 125 - [LintBSHTypedVariableDeclaration] Variable name 'sourceId' is shadowing an earlier variable declaration 
  Line 147 - [LintBSHAmbiguousName] Could not find variable name 'e_firstname ' 
  Line 160 - [LintBSHAmbiguousName] Could not find variable name 'e_firstname ' 
  Line 160 - [LintBSHAmbiguousName] Could not find variable name 'e_middleName ' 
  Line 160 - [LintBSHAmbiguousName] Could not find variable name 'e_lastname ' 
  Line 162 - [LintBSHAmbiguousName] Could not find variable name 'c_firstname ' 
  Line 162 - [LintBSHAmbiguousName] Could not find variable name 'c_middleName ' 
  Line 162 - [LintBSHAmbiguousName] Could not find variable name 'c_lastname ' 
​
________________________________________________________________________________
  Runtime stats:
    Started validation at 2023-03-08 06:15:57.946
    1 Rules Analyzed
    2 Errors
    12 Warnings
​
    Finished validation at:  2023-03-08 06:15:58.261
    Process completed in 0 seconds.
________________________________________________________________________________
```

## Resources

<a target="\_blank" href={require('/static/sailpoint-saas-rule-validator-3.0.26.zip').default}> Identity Now Rule Validator </a>
