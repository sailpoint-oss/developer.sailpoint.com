---
id: cloud-executed-rules
title: Cloud Executed Rules
pagination_label: Cloud Executed Rules
sidebar_label: Cloud Executed Rules
sidebar_position: 1
sidebar_class_name: cloudExecutedRules
keywords: ["cloud", "rules"]
description: Overview of cloud executed rules
slug: /docs/rules/cloud-rules
tags: ["Rules"]
---

## Overview

**Cloud-Executed Rules** or **Cloud Rules** typically only perform a very
specific function, such as calculating attribute values or things of that
nature. Cloud Rules all execute within SailPoint cloud and offer access to
objects and data, however they do not offer any sort of externalized
connectivity.

Because these execute in a multi-tenant cloud environment, they have a very
restricted context, and a lot of scrutiny is put into a review process to ensure
that they execute in an efficient and secure manner.

## Supported Cloud Rules

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

## Configuration Process

To ensure maximum compatibility, platform integrity, and security SailPoint has
instantiated a review process to ensure any submitted Cloud Rules meet SailPoint
requirements and doesn't contain code that could harm the system. In addition
these are checked to verify intended purpose and use cases.

In this process, SailPoint does _not check_ if the rule will execute correctly
or verify that it works as expected, to deliver specific outcomes. It is merely
an integrity check on the rule itself.

## Submitting for Rule Review

In order to submit your Cloud Rule for review, approval, and inclusion in the
SailPoint platform, they should be submitted via
[SailPoint Professional Services](https://www.sailpoint.com/services/professional/).
If you need assistance writing and testing rules, they can be sure to assist in
that process as well. Please make sure your contact information is up to date,
in case the review team needs to contact you.

## Review Guidelines

All rules which are submitted should follow proper rule submission guidelines.

- **Best Practices**
  - Ensure that all rule configurations are complete and accurate.
  - Check whether your rule follows guidance around SailPoint best practices,
    and other product features have been considered first.
- **Rule Quality**
  - Rules should abide by the [Rule Guidelines](../rule_guide#rule-guidelines)
    and [Code Restrictions](../rule_guide#rule-code-restrictions)
  - Rules must be adequately tested prior to submission.
- **Documentation**
  - Include detailed comments of non-obvious features in the configurations,
    including supporting documentation where appropriate. This includes
    justification as to why something was created, or done in a certain way. -
    _e.g. I did this because..._
- **Standards**
  - Rules must omit commented out blocks or unfinished, incomplete, or untested
    code.
  - Rules must be submitted with appropriate UTF-8 encoding.
  - Rules must make sure to convert url-encoded characters:
    - `&amp;` should be `&`
    - `&lt;` should be `<`
    - `&gt;` should be `>`
- **Rule File Naming**

The file naming convention for rules is: `Rule - {type} - {name}.xml`

So if your rule is this:

`<Rule language="beanshell" name="Calculate Lifecycle" type="IdentityAttribute">`

Then your file name should be:

`Rule - IdentityAttribute - Calculate Lifecycle.xml`

If you don't have a type, then just use "Generic" as the type. It would look
like this:

`Rule - Generic - My Generic Rule.xml`

- **Updating existing rules and versioning**

  - It is best practice to maintain a single Rule for a given use case in the
    tenant. Creating additional rules while updating to maintain versioning is
    not supported as it may cause issues during reviews and support.
  - **Example:** For an AD before provisioning rule called "AD
    BeforeProvisioningRule", you will have the file "Rule - BeforeProvisioning -
    AD BeforeProvisioningRule.xml". When updating the logic for AD, it is best
    to update the file/rule with the same name. That way changes can be properly
    tracked to the single object.

- **Deployment Windows Requirements**
  - As mentioned below, rules are generally reviewed and deployed (if accepted
    without feedback) within 24 hours.
  - If specific windows are required and you want full control over when a rule
    is updated, consider these steps to adhere to the versioning best practices.
    - Submit request for new rule with name `<original name>-TEMP`
    - Apply new rule during change window
    - Validate updated rule logic
    - Once validated, submit request to update original rule with updated logic
    - Once original rule is updated, apply original rule as the production
      configuration
    - Submit request to delete TEMP rule

## Review Expectations

Once you’ve submitted your rule and you’re in the review process, here are some
things to keep in mind:

- **Timing:** SailPoint will examine your rule as soon as we can. Most rules are
  reviewed within 24 hours of submission. However, if your rule is complex,
  poorly documented, hard to read, or presents new issues, it may require
  greater scrutiny and consideration. If your rule is repeatedly rejected for
  the same guideline violation, review of your rule may take longer to complete.
- **Status Updates:** The current status of your rule will be reflected in your
  [SailPoint Expert Services request](https://www.sailpoint.com/services/professional/#contact-form),
  so you can keep an eye on things from there.
- **Expedite Requests:** If you have a critical timing issue, you can request an
  expedited review. Please respect your fellow implementers by seeking expedited
  review only when you truly need it. If we find you’re abusing this system, we
  may reject further requests going forward.
- **Rejections:** Our goal is to apply these guidelines fairly and consistently,
  but nobody’s perfect. If your rule has been rejected and you have questions or
  would like to provide additional information, please communicate directly with
  the rule review team. This may help get your rule in IdentityNow, and it can
  help us improve the process or identify a need for clarity in our policies. If
  you still disagree with the outcome, please let us know and we can look into
  the matter.
- **Changes:** Rule changes or modifications to meet guidelines are not the
  responsibility of the reviewer, they are the responsibility of the person(s)
  who are submitting the rule. Reviewers may give advice, examples, etc. to
  assist, but this is not guaranteed to be the solution, and should be tested
  before re-submission.

```

```
