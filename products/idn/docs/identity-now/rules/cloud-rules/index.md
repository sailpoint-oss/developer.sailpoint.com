---
id: cloud-executed-rules
title: Cloud Executed Rules
pagination_label: Cloud Executed Rules
sidebar_label: Cloud Executed Rules
sidebar_position: 2
sidebar_class_name: cloudExecutedRules
keywords: ['cloud', 'rules']
description: Overview of cloud-executed rules
slug: /docs/rules/cloud-rules
tags: ['Rules']
---

## Overview

**Cloud-Executed Rules** or **Cloud Rules** typically only perform a specific function, such as calculating attribute values. Cloud Rules all execute within the SailPoint cloud and offer access to objects and data, but they do not offer any sort of externalized connectivity.

Because these rules execute in a multi-tenant cloud environment, they have a very restricted context, and the review process is carefully scrutinized to ensure that they execute in an efficient and secure manner.

## Supported Cloud Rules

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

## Configuration Process

To ensure maximum compatibility, platform integrity, and security, SailPoint has instantiated a review process to ensure that any submitted Cloud Rules meet SailPoint requirements and that they do not contain code that can harm the system. The review process also checks the rules to verify their intended purposes and use cases.

In this process, SailPoint does _not check_ whether the rule executes correctly or verify that it works as expected to deliver specific outcomes. The review is merely an integrity check on the rule itself.

## Submitting for Rule Review

To submit your Cloud Rule for review, approval, and inclusion in the SailPoint platform, submit them with [SailPoint Professional Services](https://www.sailpoint.com/services/professional/). If you need help writing and testing rules, Professional Services can help you with that process as well. Make sure your contact information is up to date, in case the review team needs to contact you.

## Review Guidelines

All submitted rules must follow proper rule submission guidelines.

- **Best Practices**
  - Ensure that all rule configurations are complete and accurate.
  - Check whether your rule follows SailPoint best practice guidance, and ensure that you have considered other product features first.
- **Rule Quality**
  - Rules must follow the [Rule Guidelines](../index.md#rule-guidelines) and [Code Restrictions](../index.md#rule-code-restrictions)
  - Rules must be adequately tested prior to submission.
- **Documentation**
  - Include detailed comments for non-obvious features in the configurations, including supporting documentation where appropriate. This includes justification for why something was created or done in a certain way. - _e.g. I did this because..._
- **Standards**
  - Rules must omit commented out blocks or unfinished, incomplete, or untested code.
  - Rules must be submitted with appropriate UTF-8 encoding.
  - Rules must convert url-encoded characters:
    - `&amp;` should be `&`
    - `&lt;` should be `<`
    - `&gt;` should be `>`
- **Rule File Naming**

The file naming convention for rules is: `Rule - {type} - {name}.xml`

If this is your rule:

`<Rule language="beanshell" name="Calculate Lifecycle" type="IdentityAttribute">`

This should be your file name:

`Rule - IdentityAttribute - Calculate Lifecycle.xml`

If you do not have a type, use "Generic" as the type. It would look like this:

`Rule - Generic - My Generic Rule.xml`

- **Updating Existing Rules and Versioning**

  - The best practice is to maintain a single rule for a given use case in the tenant. Creating additional rules while updating to maintain versioning is not supported because doing so may cause issues during reviews and support.
  - **Example:** For an AD Before Provisioning rule called "AD BeforeProvisioningRule", you have the file "Rule - BeforeProvisioning - AD BeforeProvisioningRule.xml". When you are updating the logic for AD, it is best to update the file/rule with the same name, so changes can be properly tracked to the single object.

- **Deployment Window Requirements**
  - Rules are generally reviewed and deployed, if they are accepted without feedback, within 24 hours.
  - If specific windows are required and you want full control of when a rule is updated, use these steps to follow the versioning best practices:
    - Submit your request for a new rule with the name: `<original name>-TEMP`
    - Apply the new rule during the change window.
    - Validate the updated rule logic.
    - Once the rule is validated, submit your request to update original rule with the updated logic.
    - Once the original rule is updated, apply the original rule as the production configuration.
    - Submit your request to delete the TEMP rule.

## Review Expectations

Once you have submitted your rule and you are in the review process, remember these points:

- **Timing:** SailPoint will examine your rule as soon as possible. Most rules are reviewed within 24 hours of submission. However, if your rule is complex, poorly documented, hard to read, or if it presents new issues, it may require greater scrutiny and consideration. If your rule is repeatedly rejected for the same guideline violation, your rule's review may take longer to complete.
- **Status Updates:** Your rule's current status will be reflected in your [SailPoint Expert Services request](https://www.sailpoint.com/services/professional/#contact-form), so you can monitor its progress there.
- **Expedite Requests:** If you have a critical timing issue, you can request an expedited review. Respect your fellow implementers by seeking expedited review only when you truly need it. If you are found to be abusing this system, SailPoint may reject further requests going forward.
- **Rejections:** SailPoint's goal is to apply these guidelines fairly and consistently, but mistaken rejections can happen. If your rule has been rejected and you have questions or you would like to provide additional information, communicate directly with the rule review team. This may help get your rule into IdentityNow, and it can help SailPoint improve the process or identify a need for clarity in its policies. If you still disagree with the outcome, let SailPoint know and someone can look into it.
- **Changes:** Rule changes or modifications to meet guidelines are not the reviewer's responsibility. They are the responsibility of the person(s) submitting the rule. Reviewers may give advice, examples, etc. to help, but doing so does not guarantee a solution. You should test the rules with the changes before resubmission.

```

```
