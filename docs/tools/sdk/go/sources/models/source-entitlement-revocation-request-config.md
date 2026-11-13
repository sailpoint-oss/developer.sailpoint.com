# SourceEntitlementRevocationRequestConfig

# SourceEntitlementRevocationRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | Pointer to [**[]SourceEntitlementApprovalScheme**](source-entitlement-approval-scheme) | Ordered list of approval steps for the revocation request. Empty when no approval is required. | [optional] 

## Methods

### NewSourceEntitlementRevocationRequestConfig

`func NewSourceEntitlementRevocationRequestConfig() *SourceEntitlementRevocationRequestConfig`

NewSourceEntitlementRevocationRequestConfig instantiates a new SourceEntitlementRevocationRequestConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceEntitlementRevocationRequestConfigWithDefaults

`func NewSourceEntitlementRevocationRequestConfigWithDefaults() *SourceEntitlementRevocationRequestConfig`

NewSourceEntitlementRevocationRequestConfigWithDefaults instantiates a new SourceEntitlementRevocationRequestConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalSchemes

`func (o *SourceEntitlementRevocationRequestConfig) GetApprovalSchemes() []SourceEntitlementApprovalScheme`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *SourceEntitlementRevocationRequestConfig) GetApprovalSchemesOk() (*[]SourceEntitlementApprovalScheme, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *SourceEntitlementRevocationRequestConfig) SetApprovalSchemes(v []SourceEntitlementApprovalScheme)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *SourceEntitlementRevocationRequestConfig) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.


