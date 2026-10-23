# AccessProfile

# AccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id of the Access Profile | [optional] 
**Name** | Pointer to **string** | Name of the Access Profile | [optional] 
**Description** | Pointer to **string** | Information about the Access Profile | [optional] 
**Privileged** | Pointer to **bool** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the access profile contains any entitlements that are privileged. Retained for backward compatibility. | [optional] [default to false]
**CloudGoverned** | Pointer to **bool** | True if the access profile is cloud governed. | [optional] [default to false]
**EndDate** | Pointer to **SailPointTime** | The date at which a user's access expires | [optional] 
**Owner** | Pointer to [**IdentityReference**](identity-reference) |  | [optional] 
**SourceName** | Pointer to **string** | The name of the source for which this entitlement belongs | [optional] 
**SourceType** | Pointer to **string** | The type of the source for which the entitlement belongs | [optional] 
**SourceId** | Pointer to **string** | The ID of the source for which the entitlement belongs | [optional] 
**Created** | Pointer to **SailPointTime** | Date the Access Profile was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | Date the Access Profile was last modified. | [optional] 
**Entitlements** | Pointer to [**[]EntitlementReference**](entitlement-reference) | A list of entitlement references associated to this access profile. | [optional] 

## Methods

### NewAccessProfile

`func NewAccessProfile() *AccessProfile`

NewAccessProfile instantiates a new AccessProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileWithDefaults

`func NewAccessProfileWithDefaults() *AccessProfile`

NewAccessProfileWithDefaults instantiates a new AccessProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfile) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfile) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfile) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfile) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfile) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessProfile) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessProfile) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessProfile) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessProfile) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessProfile) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPrivileged

`func (o *AccessProfile) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *AccessProfile) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *AccessProfile) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *AccessProfile) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *AccessProfile) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *AccessProfile) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *AccessProfile) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *AccessProfile) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetEndDate

`func (o *AccessProfile) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *AccessProfile) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *AccessProfile) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *AccessProfile) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetOwner

`func (o *AccessProfile) GetOwner() IdentityReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccessProfile) GetOwnerOk() (*IdentityReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccessProfile) SetOwner(v IdentityReference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *AccessProfile) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetSourceName

`func (o *AccessProfile) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessProfile) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessProfile) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessProfile) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSourceType

`func (o *AccessProfile) GetSourceType() string`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *AccessProfile) GetSourceTypeOk() (*string, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *AccessProfile) SetSourceType(v string)`

SetSourceType sets SourceType field to given value.

### HasSourceType

`func (o *AccessProfile) HasSourceType() bool`

HasSourceType returns a boolean if a field has been set.

### GetSourceId

`func (o *AccessProfile) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccessProfile) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccessProfile) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccessProfile) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetCreated

`func (o *AccessProfile) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccessProfile) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccessProfile) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AccessProfile) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *AccessProfile) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AccessProfile) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AccessProfile) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AccessProfile) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEntitlements

`func (o *AccessProfile) GetEntitlements() []EntitlementReference`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *AccessProfile) GetEntitlementsOk() (*[]EntitlementReference, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *AccessProfile) SetEntitlements(v []EntitlementReference)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *AccessProfile) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.


