# PublicIdentitiesTextQuery

# PublicIdentitiesTextQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | `Array<string>` | Attribute keys to search. Base keys must match GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional \"attributes.\" prefix and/or \".exact\" suffix (e.g. email, attributes.email, email.exact, attributes.email.exact). | [default to undefined]
**terms** | `Array<PublicIdentitiesTextQueryTermsInner>` | Search terms. Each value must be a non-blank string or a JSON boolean. | [default to undefined]
**matchAny** | **(optional)** `boolean` | When true, terms/fields are OR\'d within this text query. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false. | [default to false]
**contains** | **(optional)** `boolean` | When true, matches substrings. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false. | [default to false]
**strict** | **(optional)** `boolean` | When true, applies strict matching. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to true. | [default to false]

