# TemplateVariable

# TemplateVariable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The variable name as used when rendering context in templates. | [optional] 
**Type** | Pointer to **string** | The data type for this variable. Use JSON Schema-like names for values (string, boolean, number, object, array) or \"function\" for template utility/helper functions (e.g. __dateTool.format(), __esc.html()).  | [optional] 
**Description** | Pointer to **NullableString** | Human-readable description explaining what this variable represents. | [optional] 
**Example** | Pointer to **interface\{\}** | Example value demonstrating the format and usage. For type \"function\", often a Velocity-style call (e.g. $__esc.html($value)). Can be a string, number, boolean, object, array, or null when no example is defined.  | [optional] 

## Methods

### NewTemplateVariable

`func NewTemplateVariable() *TemplateVariable`

NewTemplateVariable instantiates a new TemplateVariable object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateVariableWithDefaults

`func NewTemplateVariableWithDefaults() *TemplateVariable`

NewTemplateVariableWithDefaults instantiates a new TemplateVariable object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TemplateVariable) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TemplateVariable) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TemplateVariable) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TemplateVariable) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetType

`func (o *TemplateVariable) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TemplateVariable) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TemplateVariable) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TemplateVariable) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDescription

`func (o *TemplateVariable) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateVariable) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateVariable) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateVariable) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *TemplateVariable) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *TemplateVariable) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetExample

`func (o *TemplateVariable) GetExample() interface{}`

GetExample returns the Example field if non-nil, zero value otherwise.

### GetExampleOk

`func (o *TemplateVariable) GetExampleOk() (*interface{}, bool)`

GetExampleOk returns a tuple with the Example field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExample

`func (o *TemplateVariable) SetExample(v interface{})`

SetExample sets Example field to given value.

### HasExample

`func (o *TemplateVariable) HasExample() bool`

HasExample returns a boolean if a field has been set.

### SetExampleNil

`func (o *TemplateVariable) SetExampleNil(b bool)`

 SetExampleNil sets the value for Example to be an explicit nil

### UnsetExample
`func (o *TemplateVariable) UnsetExample()`

UnsetExample ensures that no value is present for Example, not even an explicit nil

