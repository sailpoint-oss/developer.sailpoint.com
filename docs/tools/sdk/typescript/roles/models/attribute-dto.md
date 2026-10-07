# AttributeDTO

# AttributeDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | Technical name of the Attribute. This is unique and cannot be changed after creation. Allowed characters are letters, numbers, dashes (-), and underscores (_); the value cannot start or end with a dash or underscore. | [default to undefined]
**name** | **(optional)** `string` | The display name of the key. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ - | [default to undefined]
**multiselect** | **(optional)** `boolean` | Indicates whether the attribute can have multiple values. | [default to false]
**isAdhoc** | **(optional)** `boolean` | Indicates whether this Attribute supports ad-hoc (dynamically created) values, in addition to pre-defined static values. Ad-hoc values are created dynamically through an internal service-to-service flow rather than through the public create-value API. This field can be set when creating an Attribute; if omitted, it defaults to false. | [default to false]
**status** | **(optional)** `string` | The status of the Attribute. | [default to undefined]
**type** | **(optional)** `string` | The type of the Attribute. This can be either \"custom\" or \"governance\". | [default to undefined]
**objectTypes** | **(optional)** `Array<string>` | An array of object types this attributes values can be applied to. Possible values are \"all\" or \"entitlement\". Value \"all\" means this attribute can be used with all object types that are supported. | [default to undefined]
**description** | **(optional)** `string` | The description of the Attribute. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ : - | [default to undefined]
**values** | **(optional)** `Array<AttributeValueDTO>` |  | [default to undefined]

