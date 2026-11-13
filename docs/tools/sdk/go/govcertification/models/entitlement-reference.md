# EntitlementReference

# EntitlementReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id for the entitlement | [optional] 
**Name** | Pointer to **string** | The name of the entitlement | [optional] 
**Description** | Pointer to **string** | Information about the entitlement | [optional] 

## Methods

### NewEntitlementReference

`func NewEntitlementReference() *EntitlementReference`

NewEntitlementReference instantiates a new EntitlementReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementReferenceWithDefaults

`func NewEntitlementReferenceWithDefaults() *EntitlementReference`

NewEntitlementReferenceWithDefaults instantiates a new EntitlementReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EntitlementReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntitlementReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *EntitlementReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntitlementReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntitlementReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntitlementReference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *EntitlementReference) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EntitlementReference) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EntitlementReference) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EntitlementReference) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


