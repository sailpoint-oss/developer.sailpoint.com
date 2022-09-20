---
id: rules
title: Rules
pagination_label: Rules
sidebar_label: Rules
sidebar_position: 2
sidebar_class_name: rules
keywords: ["rules"]
description: Rule documentation for developing rules in Identity Now.
slug: /docs/rules
tags: ["Rules"]
---

## Overview

In SailPoint solutions, rules are a flexible configuration framework which
implementers can leverage to preform complex or advanced configurations. While
rules allow some advanced flexibility, special considerations must be taken when
deciding to implement rules.

## Rule Execution

IdentityNow is a multi-tenant cloud solution, and its architecture varies quite
differently than other SailPoint products (like IdentityIQ). As such, how rules
execute within IdentityNow reflects the architectural design considerations on
which the platform was built. What can and can't be done within a rule is
primarily dictated by this key factor.

There are primarily two places rules can get executed:

- **Cloud Execution** - Rules that are executed in the IdentityNow multi-tenant
  cloud.
- **Connector Execution** - Rules that are executed on the on-premise
  IdentityNow virtual appliance.

![Rule Execution](./img/rule_execution.png)

**Cloud-Executed Rules** or **Cloud Rules** typically only perform a very
specific function, such as calculating attribute values or things of that
nature. A lot of these rules may have ability to query the IdentityNow
data-model in a read-only fashion, however they do not have the ability to
commit transactions, save objects, etc.

Because these execute in a multi-tenant cloud environment, they have a very
restricted context, and a lot of scrutiny is put on the review process to ensure
that they execute in an efficient and secure manner.

For more details see [Cloud Rules](./cloud-rules/index.md).

**Connector-Executed Rules** or **Connector Rules** are rules that are executed
in the IdentityNow virtual appliance, and are usually an extension point of the
connector itself. The rules are commonly used for performing complex
connector-related functions, and likewise are very specific to only certain
connectors. Because these rules execute in the virtual appliance, they do not
have access to query the IdentityNow data model, or fetch information from
IdentityNow; instead they rely on contextual information sent from IdentityNow.
Connector-executed rules may also have managed connections supplied in their
contexts in order to support querying end systems or sources. While these
managed connections may be used, making additional connections or call-outs is
not allowed.

For more details see the [Connector Rules](./connector-rules/index.md).

## Support Considerations

While IdentityNow may share some common functionality from other SailPoint
products (like IdentityIQ), it doesn't mean that the same rules are supported,
or even execute the same way or with the same context and variables. SailPoint
recommends that you become familiar with which rules execute with which
products, and the nuances in their execution contexts.

From a SailPoint Support perspective, rules are considered a configuration. The
underlying platform is supported, but the rule configurations itself are not
considered something that SailPoint supports. Any problems with how rules are
implemented or run over time is the responsibility of the customer or
implementer to manage. SailPoint requires IdentityNow Expert Services hours to
cover any rule configuration work (e.g., creating rules, best practices reviews,
application to your IdentityNow environment, and promotion between sandbox &
prod environments). Contact your Customer Success Manager with any questions.
While rules allow some advanced flexibility, these support considerations must
be taken when deciding to implement rules. Rule usage should be considered as a
last resort, with preference to IdentityNow features over rule implementation.

## Rule Guidelines

- **Supported Rules**

  - Rules must be one of the Supported Rules as defined in
    [Supported Cloud Rules](./cloud-rules/index.md#supported-cloud-rules) and
    [Supported Connector Rules](./connector-rules/index.md#supported-connector-rules).
    The Rule must also be annotated with the correct type.

  - Adhere to the purpose of the rule as defined by the rule in Supported Rules.
    Do not use or abuse the rule differently than the rule purpose was intended.

  - The rules must utilize only available SailPoint product features, and must
    not make unsupported API calls.

- **Logging**

  - Use logging statements sparingly, but informatively. Do not make unnecessary
    logging calls.

  - Do not use `System.out` statements to output data. This does not get picked
    up by internal log aggregators.

  - If rules are to log statements, use `log.debug()`, `log.info()`,
    `log.warn()`, or `log.error()` statements.

  - When logging, do not log full object serialization to logs. Calls to
    `.toXml()` or similar methods are prohibited.

  - Logging of sensitive data is prohibited.

  - Do not declare your own loggers in the rule.

- **Execution**

  - Do not spawn any additional threads in the rule.

  - Connections to systems other than through provided connection contexts is
    strictly prohibited.

  - Do not call out to external sources, files, services, APIs, etc. unless that
    is a connector’s purpose. Avoid using file system object manipulation, like
    opening temp files or spooling to text or CSV files. This can cause
    unforeseen issues when connections are leaked or improperly used.

  - When using conditional execution, there should be no dead or inaccessible
    code, and all methods which return values, should be able to return a value.

- **Error Handling**

  - Use proper error handling including `try { ... }` , `catch { ... }` and
    `finally { ... }` blocks to allow exceptions to propagate as intended. This
    is especially true of connector-executed rules.
  - Do not assume that objects are always available; they can be null. Make sure
    that you have proper null checks to prevent Null Pointer Exceptions (NPEs).

- **Security**

  - Rules should implement appropriate security measures to ensure proper
    handling of user information and prevent its unauthorized use, disclosure,
    or access by third parties.
  - Logging of sensitive data is prohibited, and grounds for rule rejection.
  - Do not include test values, passwords, keys, or sensitive values in the rule
    code.

- **Performance**
  - Rules should be as performant as possible to achieve the task at hand.
  - Beware of iterative rules execution. Rules that are heavily iterative will
    have greater performance scrutiny.
  - Do not iterate over lists of objects (like accounts or identities). This
    causes cache bloat. Use a projection query where possible to find the data
    you need, and then return the values you want. If you are unsure, ask
    [SailPoint Expert Services](https://www.sailpoint.com/services/professional/#contact-form).

## Rule Code Restrictions

The following code fragments are not allowed to be used in any SailPoint
[Cloud Rules](./cloud-rules/index.md) or
[Connector Rules](./connector-rules/index.md). Any usage of these will be
blocked in the system.

```java
context.
.prepare()
.getJdbcConnection()
.getConnection()
.isClosed()
.setUserName()
.getUserName()
.impersonate()
.setScopeResults()
.getScopeResults()
.getConfiguration()
.encrypt()
.decrypt()
.authenticate()
.sendEmailNotification()
.runRule()
.runScript()
.startTransaction()
.commitTransaction()
.rollbackTransaction()
.getObjectById()
.getObjectByName()
.getObject()
.lockObjectById()
.lockObjectByName()
.lockObject()
.unlockObject()
.getUniqueObject()
.getObjects()
.search()
.update()
.countObjects()
.removeObjects()
.attach()
.decache()
.clearHighLevelCache()
.getReferencedObject()
.enableStatistics()
.printStatistics()
.reconnect()
.setPersistenceOptions()
.getPersistenceOptions()
.setProperty()
.importObject()
.notify()
.notifyAll()
.reconnect()
.removeObject()
SailpointFactory
.toXml()
System.out.
System.err.
Runnable
Thread
public static
.printStackTrace
XMLObjectFactory
Log4j
Logger.getLogger​
```

Note that the following code fragments are not allowed within
[connector-executed rules](./connector-rules/index.md#supported-connector-rules),
as they are not valid at the connector level. They will, for a short time, still
be allowed for pre-existing [cloud-executed rules](./cloud-rules/index.md) as a
review exception. However, any new rules using these constructs will be returned
to the submitter, who will be asked to re-write the rule using the
[IDN Rule Utility](./idn_rule_utility.md) helper methods instead:

- context
- .getObjectById()
- .getObjectByName()
- .getObject()
- .search()
- .countObjects()

## Other Rules

While IdentityNow may share some common functionality from other SailPoint
products (like IdentityIQ), it doesn't mean that the same rules are supported,
or even execute the same way. SailPoint recommends that you become familiar with
what rules execute with which products, and the nuances in their execution
contexts. Any other rules not mentioned in the Cloud-Executed Rules or
Connector-Executed Rules section are considered not supported by IdentityNow.

## Deprecated Rules

The following rules have been deprecated in IdentityNow. SailPoint suggests
using supported product functionality instead of these rules:

- **Certification Exclusion Rules** - Use configurable certification campaign
  filters
- **Identity Selector Rules** - Use role standard assignment criteria instead
- **Integration Rules** - Use
  [Before Provisioning](./cloud-rules/before_provisioning_rule.md) rules instead
