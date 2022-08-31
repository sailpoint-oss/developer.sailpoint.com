---
id: transforms
slug: /docs/transforms
title: Transforms
---
# Building Transforms in IdentityNow

In SailPoint's cloud services, transforms allow you to manipulate attribute values while aggregating from or provisioning to a source. This guide provides a reference to help you understand the purpose, configuration, and usage of transforms.

## What are Transforms?

Transforms are configurable objects that define easy ways to manipulate attribute data without requiring you to write code. Transforms are configurable building blocks with sets of inputs and outputs:

![What are Transforms 1](./img/what_are_transforms_1.png)

Because there is no code to write, an administrator can configure these using a JSON object structure and uploading them into IdentityNow using [IdentityNow's Transform REST APIs](https://developer.sailpoint.com/apis/v3/#tag/Transforms).

> **NOTE**: Sometimes transforms are referred to as Seaspray, the codename for transforms. IdentityNow Transforms and Seaspray are essentially the same.

## How Transforms Work

Transforms typically have an input(s) and output(s). The way the transformation happens mainly depends on the type of transform. Refer to [Operations in IdentityNow Transforms](../transform_operations/transform_operations.md#operations-in-identitynow-transforms) for more information.

For example, a [Lower transform](../transform_operations/operations/lower.md) transforms any input text strings into lowercase versions as output. So if the input were "Foo", the lower case output of the transform would be "foo":

![How Transforms Work 1](./img/how_transforms_work_1.png)

There are other types of transforms too. For example an [E.164 Phone transform](../transform_operations/operations/e164_phone.md) transforms any input phone number strings into an E.164 formatted version as output. So if the input were "(512) 346-2000" the output would be "+1 5123462000":

![How Transforms Work 2](./img/how_transforms_work_2.png)

### Multiple Transform Inputs

In the previous examples, each transform had a single input. Some transforms can specify more than one input. For example, the [Concat transform](../transform_operations/operations/concatenation.md) concatenates one or more strings together. If "Foo" and "Bar" were inputs, the transformed output would be "FooBar":

![How Transforms Work 3](./img/how_transforms_work_3.png)

### Complex Nested Transforms

For more complex use cases, a single transform may not be enough. It is possible to link several transforms together. IdentityNow calls these 'nested' transforms because they are transform objects within other transform objects.

An example of a nested transform would be using the previous [Concat transform](../transform_operations/operations/concatenation.md) and passing its output as an input to another [Lower transform](../transform_operations/operations/lower.md). If the inputs "Foo" and "Bar" were passed into the transforms, the ultimate output would be "foobar," concatenated and lower-cased.

![How Transforms Work 4](./img/how_transforms_work_4.png)

There is no hard limit for the number of transforms that can be nested. However, the more transforms applied, the more complex the nested transform will be, which can make it difficult to understand and maintain.

## Configuring Transform Behavior

Some transforms can specify an attributes map that configures the transform behavior. Each transform type has different configuration attributes and different uses. To better understand what is configurable per transform, refer to the Transform Types section and the associated Transform guide(s) that cover each transform.

It is possible to extend the earlier complex nested transform example. If a Replace transform, which replaces certain strings with replacement text, were added, and the transform were configured to replace "Bar with "Baz," the output would be added as an input to the Concat and Lower transforms:

![Configuring Transform Behavior 1](./img/configuring_transform_behavior_1.png)

The output of the Replace transform would be "Baz," which is then passed as an input to the Concat transform along with "Foo," producing an output of "FooBaz." This is then passed as an input into the Lower transform, producing a final output of "foobaz."

### Transform Syntax

Transforms are JSON objects. Prior to this, the transforms have been shown as flows of building blocks to help illustrate basic transform ideas. However at the simplest level, a transform looks like this:

```json
{
    "name": "Lowercase Department",
    "type": "lower",
    "attributes": {
        ...
    }
}
```

There are three main components of a transform object:

1. `name` - This specifies the name of the transform. It refers to a transform in the IdentityNow API or User Interface. Only provide a name on the root-level transform. Nested transforms do not have names.

2. `type` - This specifies the transform type, which ultimately determines the transform's behavior.

3. `attributes` - This specifies any attributes or configurations for controlling how the transform works. As mentioned earlier in [Configuring Transform Behavior](#configuring-transform-behavior), each transform type has different sets of attributes available.

### Implicit vs Explicit Input

A special configuration attribute available to all transforms is input. If the input attribute is not specified, this is referred to as implicit input, and the system determines the input based on what is configured. If the input attribute is specified, then this is referred to as explicit input, and the system's input is ignored in favor of whatever the transform explicitly specifies. A good way to understand this concept is to walk through an example. Imagine that IdentityNow has the following:

- An account on Source 1 with department set to "Services."
- An account on Source 2 with department set to "Engineering."

The following two examples explain how a transform with an implicit or explicit input would work with those sources.

### Implicit Input

An identity profile is configured the following way:

![Configuring Transform Behavior 2](./img/configuring_transform_behavior_2.png)

As an example, the "Lowercase Department" transform being used is written the following way:

```json
{
  "name": "Lowercase Department",
  "type": "lower",
  "attributes": {}
}
```

Notice that the attributes has no input. This is an implicit input example. The transform uses the input provided by the attribute you mapped on the identity profile.

In this example, the transform would produce "services" when the source is aggregated because Source 1 is providing a department of "Services," which then gets lowercased per the transform.

### Explicit Input

As an example, the "Lowercase Department" has been changed the following way:

```json
{
  "name": "Lowercase Department",
  "type": "lower",
  "attributes": {
    "input": {
      "type": "accountAttribute",
      "attributes": {
        "attributeName": "department",
        "sourceName": "Source 2"
      }
    }
  }
}
```

Notice that there is an `input` in the attributes. This is an explicit input example. The transform uses the value Source 2 provides for the "department" attribute, ignoring your configuration in the identity profile.

In this example, the transform would produce "engineering" because Source 2 is providing a department of "Engineering," which then gets lowercased, per the transform. Though the system is still providing an implicit input of Source 1's department attribute, the transform ignores this and uses the explicit input specified as Source 2's department attribute.

> **Note**: This is also an example of a nested transform.

## Transform Usage

You typically use transforms when data in IdentityNow or on a source is not normalized for its intended destination and must be mapped, generated, or otherwise altered to meet data standards. Transforms have a variety of applications across IdentityNow's feature sets, ranging from account correlation for access reviews to provisioning new accounts in target sources.

You mainly use transforms in two places:

1. The identity - on an identity profile for identity attribute calculation. These are calculated during any identity refresh process.

2. The account - on a source profile for determining new account attribute values for provisioning operations (like account creation).

### Identity Transforms

Identity attribute transforms are configured on the identity profile. Use them to determine identity attribute values calculated during an identity refresh process.

**Configuration**

These can be configured in IdentityNow by going to **Admin** > **Identities** > **Identity Profiles** > (An Identity Profile) > **Mappings** (tab). These can also be configured with IdentityNow REST APIs.

From this screen the installed, available transforms can be added to an identity profile to transform identity attributes. Select a transform next to an identity attribute. Once the transform is configured, click **Save**.

**Testing Transforms**

Once the transform is saved, you can preview the example transform data with the Preview function. This provides a live preview of the newly saved transforms applied to the identity data.

**Applying Transforms**

Select Update to apply the transform updates. This starts an identity refresh process to recalculate and update identity attributes for all identities in the system.

> **Note**: This process can take some time.

### Account Transforms

Account attribute transforms are configured on the account create profiles. They determine the templates for new accounts created during provisioning events.

**Configuration**

These can be configured in IdentityNow by going to **Admin** > **Sources** > (A Source) > **Accounts** (tab) > **Create Profile**. These can also be configured with IdentityNow REST APIs.

You can select the installed, available transforms from this interface. Alternately, you can add more complex transforms with REST APIs.

For more information on the IdentityNow REST API endpoints used to managed transform objects in APIs, refer to [IdentityNow REST APIs](https://developer.sailpoint.com/apis/v3/#tag/Transforms).

> **Note**: For details about authentication against REST APIs, refer to the [authentication docs](../../authentication.md).

Testing Transforms

To test a transform for an account create profile, you must generate a new account creation provisioning event. This involves granting access to an identity that does not already have an account on this source; an account is created as a byproduct of the access assignment. This can be initiated with access request or even role assignment.

Applying Transforms

Once the transforms are saved to the account profile, they are automatically applied for any subsequent provisioning events.

## Testing Seaspray Transforms

**Testing Transforms in Identity Profile Mappings**

To test a transform for identity data, go to **Identities** > **Identity Profiles** and click **Mappings**. Select the transform to map one of your identity attributes, click **Save**, and preview your identity data.

**Testing Transforms for Account Attributes**

To test a transform for account data, you must provision a new account on that source. For example, you can create an access request that would result in a new account on that source, or you can assign a new role.

## Transform Best Practices

- **Designing Complex Transforms** - Start with small transform 'building blocks' and add to them. It can be helpful to diagram out the inputs and outputs if you are using many transforms.

- **JSON Editor** - Because transforms are JSON objects, it is recommended that you use a good JSON editor. Atom, Sublime Text, and Microsoft Code work well because they have JSON formatting and plugins that can do JSON validation, completion, formatting, and folding. This is very useful for large complex JSON objects.

- **Leverage Examples** - Many implementations use similar sets of transforms, and a lot of common solutions can be found in examples. Feel free to share your own transform examples on Compass!

- **Same Problem, Multiple Solutions** - There can be multiple ways to solve the same problem, but use the solution that makes the most sense to your implementation and is easiest to administer and understand.

- **Encapsulate Repetition** - If you are copying and pastings the same transforms over and over, it can be useful to make a transform a stand-alone transform and just have other transforms reference it by using the reference type.

- **Plan for Bad Data** - Data will not always be perfect, so plan for data failures and try to ensure transforms still produce workable results, in case data is missing, malformed, or has incorrect values.

## Using Transforms vs. Rules

Sometimes it can be difficult to decide when to implement a transform and when to implement a rule. Both transforms and rules can calculate values for identity or account attributes.

Despite their functional similarity, transforms and rules have very different implementations. Transforms are JSON-based configurations, editable with IdentityNow's transform REST APIs. Rules are implemented with code (typically BeanShell, a Java-like syntax), they must abide by the [IdentityNow Rule Guidelines](https://community.sailpoint.com/docs/DOC-12122), and they require SailPoint in order to be reviewed and installed into the tenant. Rules, however, can do things that transforms cannot in some cases.

Because transforms have easier and more accessible implementations, they are generally recommended. With transforms, any IdentityNow administrator can view, create, edit, and delete transforms directly with REST API without SailPoint involvement.

If something cannot be done with a transform, then consider using a rule. When you are transitioning from a transform to a rule, you must take special consideration when you decide where the rule executes.

- If you are calculating identity attributes, you can use [Identity Attribute rules](https://community.sailpoint.com/docs/DOC-12616) instead of identity transforms.

- If you are calculating account attributes (during provisioning), you can use [Attribute Generator rules](https://community.sailpoint.com/docs/DOC-12645) instead of account transforms.

- All rules you build must abide by the [IdentityNow Rule Guidelines](https://community.sailpoint.com/docs/DOC-12122).

If you use a rule, make note of it for administrative purposes. The best practice is to check in these types of artifacts into some sort of version control (e.g., GitHub, et. Al.) for records.
