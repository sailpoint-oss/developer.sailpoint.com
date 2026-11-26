# EntitlementStateSnapshotJitDetail

# EntitlementStateSnapshotJitDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | Pointer to **string** | Application id for the entitlement attribute (same as EntitlementStateSnapshot.applicationId). | [optional] 
**AttributeName** | Pointer to **string** | Account attribute name for the entitlement (EntitlementStateSnapshot.attributeName). | [optional] 
**AttributeValues** | Pointer to **[]string** | Entitlement values for that attribute (EntitlementStateSnapshot.attributeValues). | [optional] 

## Methods

### NewEntitlementStateSnapshotJitDetail

`func NewEntitlementStateSnapshotJitDetail() *EntitlementStateSnapshotJitDetail`

NewEntitlementStateSnapshotJitDetail instantiates a new EntitlementStateSnapshotJitDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementStateSnapshotJitDetailWithDefaults

`func NewEntitlementStateSnapshotJitDetailWithDefaults() *EntitlementStateSnapshotJitDetail`

NewEntitlementStateSnapshotJitDetailWithDefaults instantiates a new EntitlementStateSnapshotJitDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationId

`func (o *EntitlementStateSnapshotJitDetail) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *EntitlementStateSnapshotJitDetail) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *EntitlementStateSnapshotJitDetail) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *EntitlementStateSnapshotJitDetail) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetAttributeName

`func (o *EntitlementStateSnapshotJitDetail) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *EntitlementStateSnapshotJitDetail) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *EntitlementStateSnapshotJitDetail) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *EntitlementStateSnapshotJitDetail) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAttributeValues

`func (o *EntitlementStateSnapshotJitDetail) GetAttributeValues() []string`

GetAttributeValues returns the AttributeValues field if non-nil, zero value otherwise.

### GetAttributeValuesOk

`func (o *EntitlementStateSnapshotJitDetail) GetAttributeValuesOk() (*[]string, bool)`

GetAttributeValuesOk returns a tuple with the AttributeValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValues

`func (o *EntitlementStateSnapshotJitDetail) SetAttributeValues(v []string)`

SetAttributeValues sets AttributeValues field to given value.

### HasAttributeValues

`func (o *EntitlementStateSnapshotJitDetail) HasAttributeValues() bool`

HasAttributeValues returns a boolean if a field has been set.


