# IntelIdentityAggregate

# IntelIdentityAggregate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identity Security Cloud identifier for this identity. | 
**Type** | **string** | Identity type for the matched record. | 
**DisplayName** | Pointer to **string** | Preferred display name for the identity across administrative experiences. | [optional] 
**Description** | Pointer to **NullableString** | Optional free-text description assigned to the identity profile when present. | [optional] 
**Subtype** | Pointer to **NullableString** | NERM classification for the identity. | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | Arbitrary SCIM-style attribute bag returned for the identity context view. | [optional] 
**Created** | Pointer to **SailPointTime** | Timestamp when the identity record was created in Identity Security Cloud. | [optional] 
**Modified** | Pointer to **SailPointTime** | Timestamp when the identity record was last modified in Identity Security Cloud. | [optional] 
**Alias** | Pointer to **string** | Primary login or account alias for the identity. | [optional] 
**Email** | Pointer to **string** | Primary business email address for the identity. | [optional] 
**IdentityStatus** | Pointer to **string** | Current identity lifecycle status label from Identity Security Cloud. | [optional] 
**IsManager** | Pointer to **bool** | True when the identity is flagged as a people manager in the organization. | [optional] [default to false]
**IdentityGraph** | Pointer to [**Intelidentitygraphlink**](intelidentitygraphlink) | Omitted when the tenant lacks the idg:base license. | [optional] 
**NonHumanIdentityOwnership** | Pointer to [**Intelnonhumanidentityownership**](intelnonhumanidentityownership) | Omitted when the tenant lacks `idn:machine-identity-security`. When present, both `agents` and `applications` always render.  | [optional] 
**Accounts** | [**IntelAccountsSlice**](intel-accounts-slice) | First page of accounts for the identity. | 
**PrivilegedAccess** | [**IntelPrivilegedAccessSlice**](intel-privileged-access-slice) | Full privileged access result for the identity. | 
**Outliers** | Pointer to [**IntelOutliersSlice**](intel-outliers-slice) | Rare access slice; omitted when the tenant lacks the IDA-outliers license. | [optional] 
**AccessHistory** | [**IntelAccessHistory**](intel-access-history) | Access-history split into access items and certifications sub-slices. | 

## Methods

### NewIntelIdentityAggregate

`func NewIntelIdentityAggregate(id string, type_ string, accounts IntelAccountsSlice, privilegedAccess IntelPrivilegedAccessSlice, accessHistory IntelAccessHistory, ) *IntelIdentityAggregate`

NewIntelIdentityAggregate instantiates a new IntelIdentityAggregate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityAggregateWithDefaults

`func NewIntelIdentityAggregateWithDefaults() *IntelIdentityAggregate`

NewIntelIdentityAggregateWithDefaults instantiates a new IntelIdentityAggregate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IntelIdentityAggregate) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IntelIdentityAggregate) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IntelIdentityAggregate) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *IntelIdentityAggregate) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IntelIdentityAggregate) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IntelIdentityAggregate) SetType(v string)`

SetType sets Type field to given value.


### GetDisplayName

`func (o *IntelIdentityAggregate) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *IntelIdentityAggregate) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *IntelIdentityAggregate) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *IntelIdentityAggregate) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *IntelIdentityAggregate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *IntelIdentityAggregate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *IntelIdentityAggregate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *IntelIdentityAggregate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *IntelIdentityAggregate) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *IntelIdentityAggregate) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSubtype

`func (o *IntelIdentityAggregate) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *IntelIdentityAggregate) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *IntelIdentityAggregate) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.

### HasSubtype

`func (o *IntelIdentityAggregate) HasSubtype() bool`

HasSubtype returns a boolean if a field has been set.

### SetSubtypeNil

`func (o *IntelIdentityAggregate) SetSubtypeNil(b bool)`

 SetSubtypeNil sets the value for Subtype to be an explicit nil

### UnsetSubtype
`func (o *IntelIdentityAggregate) UnsetSubtype()`

UnsetSubtype ensures that no value is present for Subtype, not even an explicit nil
### GetAttributes

`func (o *IntelIdentityAggregate) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *IntelIdentityAggregate) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *IntelIdentityAggregate) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *IntelIdentityAggregate) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetCreated

`func (o *IntelIdentityAggregate) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *IntelIdentityAggregate) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *IntelIdentityAggregate) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *IntelIdentityAggregate) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *IntelIdentityAggregate) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *IntelIdentityAggregate) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *IntelIdentityAggregate) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *IntelIdentityAggregate) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetAlias

`func (o *IntelIdentityAggregate) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *IntelIdentityAggregate) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *IntelIdentityAggregate) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *IntelIdentityAggregate) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetEmail

`func (o *IntelIdentityAggregate) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *IntelIdentityAggregate) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *IntelIdentityAggregate) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *IntelIdentityAggregate) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetIdentityStatus

`func (o *IntelIdentityAggregate) GetIdentityStatus() string`

GetIdentityStatus returns the IdentityStatus field if non-nil, zero value otherwise.

### GetIdentityStatusOk

`func (o *IntelIdentityAggregate) GetIdentityStatusOk() (*string, bool)`

GetIdentityStatusOk returns a tuple with the IdentityStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityStatus

`func (o *IntelIdentityAggregate) SetIdentityStatus(v string)`

SetIdentityStatus sets IdentityStatus field to given value.

### HasIdentityStatus

`func (o *IntelIdentityAggregate) HasIdentityStatus() bool`

HasIdentityStatus returns a boolean if a field has been set.

### GetIsManager

`func (o *IntelIdentityAggregate) GetIsManager() bool`

GetIsManager returns the IsManager field if non-nil, zero value otherwise.

### GetIsManagerOk

`func (o *IntelIdentityAggregate) GetIsManagerOk() (*bool, bool)`

GetIsManagerOk returns a tuple with the IsManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsManager

`func (o *IntelIdentityAggregate) SetIsManager(v bool)`

SetIsManager sets IsManager field to given value.

### HasIsManager

`func (o *IntelIdentityAggregate) HasIsManager() bool`

HasIsManager returns a boolean if a field has been set.

### GetIdentityGraph

`func (o *IntelIdentityAggregate) GetIdentityGraph() Intelidentitygraphlink`

GetIdentityGraph returns the IdentityGraph field if non-nil, zero value otherwise.

### GetIdentityGraphOk

`func (o *IntelIdentityAggregate) GetIdentityGraphOk() (*Intelidentitygraphlink, bool)`

GetIdentityGraphOk returns a tuple with the IdentityGraph field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityGraph

`func (o *IntelIdentityAggregate) SetIdentityGraph(v Intelidentitygraphlink)`

SetIdentityGraph sets IdentityGraph field to given value.

### HasIdentityGraph

`func (o *IntelIdentityAggregate) HasIdentityGraph() bool`

HasIdentityGraph returns a boolean if a field has been set.

### GetNonHumanIdentityOwnership

`func (o *IntelIdentityAggregate) GetNonHumanIdentityOwnership() Intelnonhumanidentityownership`

GetNonHumanIdentityOwnership returns the NonHumanIdentityOwnership field if non-nil, zero value otherwise.

### GetNonHumanIdentityOwnershipOk

`func (o *IntelIdentityAggregate) GetNonHumanIdentityOwnershipOk() (*Intelnonhumanidentityownership, bool)`

GetNonHumanIdentityOwnershipOk returns a tuple with the NonHumanIdentityOwnership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonHumanIdentityOwnership

`func (o *IntelIdentityAggregate) SetNonHumanIdentityOwnership(v Intelnonhumanidentityownership)`

SetNonHumanIdentityOwnership sets NonHumanIdentityOwnership field to given value.

### HasNonHumanIdentityOwnership

`func (o *IntelIdentityAggregate) HasNonHumanIdentityOwnership() bool`

HasNonHumanIdentityOwnership returns a boolean if a field has been set.

### GetAccounts

`func (o *IntelIdentityAggregate) GetAccounts() IntelAccountsSlice`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *IntelIdentityAggregate) GetAccountsOk() (*IntelAccountsSlice, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *IntelIdentityAggregate) SetAccounts(v IntelAccountsSlice)`

SetAccounts sets Accounts field to given value.


### GetPrivilegedAccess

`func (o *IntelIdentityAggregate) GetPrivilegedAccess() IntelPrivilegedAccessSlice`

GetPrivilegedAccess returns the PrivilegedAccess field if non-nil, zero value otherwise.

### GetPrivilegedAccessOk

`func (o *IntelIdentityAggregate) GetPrivilegedAccessOk() (*IntelPrivilegedAccessSlice, bool)`

GetPrivilegedAccessOk returns a tuple with the PrivilegedAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegedAccess

`func (o *IntelIdentityAggregate) SetPrivilegedAccess(v IntelPrivilegedAccessSlice)`

SetPrivilegedAccess sets PrivilegedAccess field to given value.


### GetOutliers

`func (o *IntelIdentityAggregate) GetOutliers() IntelOutliersSlice`

GetOutliers returns the Outliers field if non-nil, zero value otherwise.

### GetOutliersOk

`func (o *IntelIdentityAggregate) GetOutliersOk() (*IntelOutliersSlice, bool)`

GetOutliersOk returns a tuple with the Outliers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutliers

`func (o *IntelIdentityAggregate) SetOutliers(v IntelOutliersSlice)`

SetOutliers sets Outliers field to given value.

### HasOutliers

`func (o *IntelIdentityAggregate) HasOutliers() bool`

HasOutliers returns a boolean if a field has been set.

### GetAccessHistory

`func (o *IntelIdentityAggregate) GetAccessHistory() IntelAccessHistory`

GetAccessHistory returns the AccessHistory field if non-nil, zero value otherwise.

### GetAccessHistoryOk

`func (o *IntelIdentityAggregate) GetAccessHistoryOk() (*IntelAccessHistory, bool)`

GetAccessHistoryOk returns a tuple with the AccessHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessHistory

`func (o *IntelIdentityAggregate) SetAccessHistory(v IntelAccessHistory)`

SetAccessHistory sets AccessHistory field to given value.



