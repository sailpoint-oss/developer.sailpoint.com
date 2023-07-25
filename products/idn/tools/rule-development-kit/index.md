---
id: rdk
title: Rule Development Kit
pagination_label: RDK
sidebar_label: Rule Development Kit
sidebar_position: 1
sidebar_class_name: rdk
keywords: ['rule', 'development','kit']
description: The SailPoint Rule Development Kit is a project that enables you to develop rules faster and with less effort.
slug: /tools/rule-development-kit
tags: ['CLI']
---

## Start using the Rule Development Kit

The SailPoint Rule Development Kit is a project you can use to develop rules faster and with less effort.

The Rule Development Kit provides you with the classes and methods available to you when developing rules. You can mock out these classes and run your rule locally to test your logic before submitting it to be reviewed.

Learn how to use the SailPoint Rule Development Kit in this guide.

## Requirements

* [Java 11](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)
* [Apache Maven 3.9.3+](https://maven.apache.org/install.html)

## Clone the Project

The Rule Development Kit and its examples can be found in the Github repo [here](https://github.com/sailpoint-oss/rule-development-kit).

## Project Structure

```bash
src/
├── main/
│   ├── java/
│   │   └── RuleName.java
│   └── resources/
│       └── rules/
│           └── Rule - RuleType - RuleName.xml
└── test/
    ├── java/
    │   └── sailpoint/
    │       └── RuleNameTest.java
    └── resources/
        └── log4j2.properties
```

* **`src/main/java/`** Use this folder to develop your rules before putting them into the rule xml format, import objects as needed from `sailpoint.*`

* **`src/main/resources/rules/`** Use this folder to store your rules in the xml format you would expect to upload to IdentityNow

* **`src/test/java/sailpoint/`** Use this folder for test classes to test the rules you have implemented

## Intellisense for Rule Objects and Methods

The rule development kit provides you with intellisense when writing rules, you will have access to method names, parameter descriptions, and code completion.

![intellisense](./assets/intellisense.png)

## Testing Rules

### Configure Logging and Rule File

Create a logger instance with the name of your test class, and set the `RULE_FILENAME` to the rule you wish to test.

```java
Logger log = LogManager.getLogger(IdentityAttributeTest.class);

private static final String RULE_FILENAME = "src/main/resources/rules/Rule - IdentityAttribute - Example Rule.xml";
```

### Setup Beanshell Interpreter

Initialize the beanshell interpreter for evaluating the rule.

```java
Interpreter i = new Interpreter();
```

### Mock Objects and Return Mocked Data

```java
IdnRuleUtil idn = mock();
Identity identity = mock();
String oldValue = null

when(identity.getAttribute("startDate")).thenReturn(getDate(-7));
when(identity.getAttribute("endDate")).thenReturn(getDate(7));
```

### Pass Mocked Objects into Interpreter

### Evaluate the Script

### Assertions

### Run Maven Test

To run the test with maven open the terminal and in the root of the project run

```bash
mvn test -Dtest="TestName"
```

Run all tests in the tests directory

```bash
mvn test
```
