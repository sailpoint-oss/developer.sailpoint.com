# Identitycollectordependenciesconflicterror

# Identitycollectordependenciesconflicterror

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailCode** | **(optional)** `string` | Fine-grained error code providing more detail of the error. | [default to undefined]
**trackingId** | **(optional)** `string` | Unique tracking id for the error. | [default to undefined]
**messages** | **(optional)** `Array<IdentitycollectordependenciesconflicterrorMessagesInner>` | Generic localized reason for error. | [default to undefined]
**dependencies** | **(optional)** `Array<Identitycollectordependency>` | Dependent objects blocking deletion. At most three items are returned. | [default to undefined]
**extendedDependenciesCount** | **(optional)** `number` | Number of additional dependent objects not included in `dependencies`. | [default to undefined]

