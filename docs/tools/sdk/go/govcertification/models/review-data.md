# ReviewData

# ReviewData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetReference** | Pointer to [**TargetReference**](target-reference) |  | [optional] 
**Entitlement** | Pointer to [**Entitlement**](entitlement) |  | [optional] 
**AccessProfile** | Pointer to [**AccessProfile**](access-profile) |  | [optional] 
**Role** | Pointer to [**Role**](role) |  | [optional] 

## Methods

### NewReviewData

`func NewReviewData() *ReviewData`

NewReviewData instantiates a new ReviewData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewDataWithDefaults

`func NewReviewDataWithDefaults() *ReviewData`

NewReviewDataWithDefaults instantiates a new ReviewData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetReference

`func (o *ReviewData) GetTargetReference() TargetReference`

GetTargetReference returns the TargetReference field if non-nil, zero value otherwise.

### GetTargetReferenceOk

`func (o *ReviewData) GetTargetReferenceOk() (*TargetReference, bool)`

GetTargetReferenceOk returns a tuple with the TargetReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetReference

`func (o *ReviewData) SetTargetReference(v TargetReference)`

SetTargetReference sets TargetReference field to given value.

### HasTargetReference

`func (o *ReviewData) HasTargetReference() bool`

HasTargetReference returns a boolean if a field has been set.

### GetEntitlement

`func (o *ReviewData) GetEntitlement() Entitlement`

GetEntitlement returns the Entitlement field if non-nil, zero value otherwise.

### GetEntitlementOk

`func (o *ReviewData) GetEntitlementOk() (*Entitlement, bool)`

GetEntitlementOk returns a tuple with the Entitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlement

`func (o *ReviewData) SetEntitlement(v Entitlement)`

SetEntitlement sets Entitlement field to given value.

### HasEntitlement

`func (o *ReviewData) HasEntitlement() bool`

HasEntitlement returns a boolean if a field has been set.

### GetAccessProfile

`func (o *ReviewData) GetAccessProfile() AccessProfile`

GetAccessProfile returns the AccessProfile field if non-nil, zero value otherwise.

### GetAccessProfileOk

`func (o *ReviewData) GetAccessProfileOk() (*AccessProfile, bool)`

GetAccessProfileOk returns a tuple with the AccessProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfile

`func (o *ReviewData) SetAccessProfile(v AccessProfile)`

SetAccessProfile sets AccessProfile field to given value.

### HasAccessProfile

`func (o *ReviewData) HasAccessProfile() bool`

HasAccessProfile returns a boolean if a field has been set.

### GetRole

`func (o *ReviewData) GetRole() Role`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *ReviewData) GetRoleOk() (*Role, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *ReviewData) SetRole(v Role)`

SetRole sets Role field to given value.

### HasRole

`func (o *ReviewData) HasRole() bool`

HasRole returns a boolean if a field has been set.


