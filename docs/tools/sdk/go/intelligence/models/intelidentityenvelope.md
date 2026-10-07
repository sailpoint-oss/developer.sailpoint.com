# Intelidentityenvelope

# Intelidentityenvelope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identity Security Cloud identifier for this non-human identity. | 
**Type** | **string** | Identity type for the matched record. | 
**DisplayName** | Pointer to **string** | Preferred display name for the non-human identity. | [optional] 
**Description** | Pointer to **NullableString** | Optional description from upstream when present. | [optional] 
**Subtype** | Pointer to **NullableString** | Sub-classification label for that NHI. | [optional] 
**Attributes** | **map[string]interface\{\}** | Connector or runtime metadata; empty object when absent upstream. | 
**Created** | Pointer to **SailPointTime** | Timestamp when the identity record was created in Identity Security Cloud. | [optional] 
**Modified** | Pointer to **SailPointTime** | Timestamp when the identity record was last modified in Identity Security Cloud. | [optional] 
**Alias** | Pointer to **string** | Primary login or account alias for the identity. | [optional] 
**Email** | Pointer to **string** | Primary business email address for the identity. | [optional] 
**IdentityStatus** | Pointer to **string** | Current identity lifecycle status label from Identity Security Cloud. | [optional] 
**IsManager** | Pointer to **bool** | True when the identity is flagged as a people manager in the organization. | [optional] [default to false]
**IdentityGraph** | Pointer to [**Intelidentitygraphlink**](intelidentitygraphlink) | Omitted when the tenant lacks the idg:base license. | [optional] 
**NonHumanIdentityOwnership** | Pointer to [**Intelnonhumanidentityownership**](intelnonhumanidentityownership) | Omitted when the tenant lacks `idn:machine-identity-security`. When present, both `agents` and `applications` always render.  | [optional] 
**Accounts** | [**Intelmachineaccountsslice**](intelmachineaccountsslice) |  | 
**PrivilegedAccess** | [**IntelPrivilegedAccessSlice**](intel-privileged-access-slice) | Full privileged access result for the identity. | 
**Outliers** | Pointer to [**IntelOutliersSlice**](intel-outliers-slice) | Rare access slice; omitted when the tenant lacks the IDA-outliers license. | [optional] 
**AccessHistory** | [**IntelAccessHistory**](intel-access-history) | Access-history split into access items and certifications sub-slices. | 
**MatchConfidence** | Pointer to **string** | Match quality for opaque prefix resolution; omitted for direct id eq and exact opaque matches. | [optional] 
**NativeIdentity** | **string** | Native identifier on the source system. | 
**DatasetId** | Pointer to **NullableString** | Dataset identifier from upstream machine-identity services when present. | [optional] 
**Source** | Pointer to [**NullableIntelmachinesourcewire**](intelmachinesourcewire) | Source metadata for the machine identity when present upstream. | [optional] 
**ExistsOnSource** | Pointer to **NullableString** | Upstream existsOnSource value. Wire uses uppercase strings such as TRUE or FALSE. | [optional] 
**ManuallyEdited** | Pointer to **bool** | True when an administrator manually edited machine identity attributes. | [optional] [default to false]
**ManuallyCreated** | Pointer to **bool** | True when the machine identity was created manually in Identity Security Cloud. | [optional] [default to false]
**Owners** | [**Intelmachineidentityowners**](intelmachineidentityowners) |  | 
**UserEntitlements** | Pointer to [**[]Intelmachineuserentitlement**](intelmachineuserentitlement) | Entitlements associated with the machine identity from upstream. | [optional] 
**Derived** | [**Intelmachinederived**](intelmachinederived) |  | 

## Methods

### NewIntelidentityenvelope

`func NewIntelidentityenvelope(id string, type_ string, attributes map[string]interface{}, accounts Intelmachineaccountsslice, privilegedAccess IntelPrivilegedAccessSlice, accessHistory IntelAccessHistory, nativeIdentity string, owners Intelmachineidentityowners, derived Intelmachinederived, ) *Intelidentityenvelope`

NewIntelidentityenvelope instantiates a new Intelidentityenvelope object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelidentityenvelopeWithDefaults

`func NewIntelidentityenvelopeWithDefaults() *Intelidentityenvelope`

NewIntelidentityenvelopeWithDefaults instantiates a new Intelidentityenvelope object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Intelidentityenvelope) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Intelidentityenvelope) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Intelidentityenvelope) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *Intelidentityenvelope) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Intelidentityenvelope) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Intelidentityenvelope) SetType(v string)`

SetType sets Type field to given value.


### GetDisplayName

`func (o *Intelidentityenvelope) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Intelidentityenvelope) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Intelidentityenvelope) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Intelidentityenvelope) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *Intelidentityenvelope) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Intelidentityenvelope) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Intelidentityenvelope) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Intelidentityenvelope) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Intelidentityenvelope) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Intelidentityenvelope) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSubtype

`func (o *Intelidentityenvelope) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *Intelidentityenvelope) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *Intelidentityenvelope) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.

### HasSubtype

`func (o *Intelidentityenvelope) HasSubtype() bool`

HasSubtype returns a boolean if a field has been set.

### SetSubtypeNil

`func (o *Intelidentityenvelope) SetSubtypeNil(b bool)`

 SetSubtypeNil sets the value for Subtype to be an explicit nil

### UnsetSubtype
`func (o *Intelidentityenvelope) UnsetSubtype()`

UnsetSubtype ensures that no value is present for Subtype, not even an explicit nil
### GetAttributes

`func (o *Intelidentityenvelope) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Intelidentityenvelope) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Intelidentityenvelope) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetCreated

`func (o *Intelidentityenvelope) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Intelidentityenvelope) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Intelidentityenvelope) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Intelidentityenvelope) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Intelidentityenvelope) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Intelidentityenvelope) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Intelidentityenvelope) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Intelidentityenvelope) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetAlias

`func (o *Intelidentityenvelope) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *Intelidentityenvelope) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *Intelidentityenvelope) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *Intelidentityenvelope) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetEmail

`func (o *Intelidentityenvelope) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Intelidentityenvelope) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Intelidentityenvelope) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Intelidentityenvelope) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetIdentityStatus

`func (o *Intelidentityenvelope) GetIdentityStatus() string`

GetIdentityStatus returns the IdentityStatus field if non-nil, zero value otherwise.

### GetIdentityStatusOk

`func (o *Intelidentityenvelope) GetIdentityStatusOk() (*string, bool)`

GetIdentityStatusOk returns a tuple with the IdentityStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityStatus

`func (o *Intelidentityenvelope) SetIdentityStatus(v string)`

SetIdentityStatus sets IdentityStatus field to given value.

### HasIdentityStatus

`func (o *Intelidentityenvelope) HasIdentityStatus() bool`

HasIdentityStatus returns a boolean if a field has been set.

### GetIsManager

`func (o *Intelidentityenvelope) GetIsManager() bool`

GetIsManager returns the IsManager field if non-nil, zero value otherwise.

### GetIsManagerOk

`func (o *Intelidentityenvelope) GetIsManagerOk() (*bool, bool)`

GetIsManagerOk returns a tuple with the IsManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsManager

`func (o *Intelidentityenvelope) SetIsManager(v bool)`

SetIsManager sets IsManager field to given value.

### HasIsManager

`func (o *Intelidentityenvelope) HasIsManager() bool`

HasIsManager returns a boolean if a field has been set.

### GetIdentityGraph

`func (o *Intelidentityenvelope) GetIdentityGraph() Intelidentitygraphlink`

GetIdentityGraph returns the IdentityGraph field if non-nil, zero value otherwise.

### GetIdentityGraphOk

`func (o *Intelidentityenvelope) GetIdentityGraphOk() (*Intelidentitygraphlink, bool)`

GetIdentityGraphOk returns a tuple with the IdentityGraph field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityGraph

`func (o *Intelidentityenvelope) SetIdentityGraph(v Intelidentitygraphlink)`

SetIdentityGraph sets IdentityGraph field to given value.

### HasIdentityGraph

`func (o *Intelidentityenvelope) HasIdentityGraph() bool`

HasIdentityGraph returns a boolean if a field has been set.

### GetNonHumanIdentityOwnership

`func (o *Intelidentityenvelope) GetNonHumanIdentityOwnership() Intelnonhumanidentityownership`

GetNonHumanIdentityOwnership returns the NonHumanIdentityOwnership field if non-nil, zero value otherwise.

### GetNonHumanIdentityOwnershipOk

`func (o *Intelidentityenvelope) GetNonHumanIdentityOwnershipOk() (*Intelnonhumanidentityownership, bool)`

GetNonHumanIdentityOwnershipOk returns a tuple with the NonHumanIdentityOwnership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonHumanIdentityOwnership

`func (o *Intelidentityenvelope) SetNonHumanIdentityOwnership(v Intelnonhumanidentityownership)`

SetNonHumanIdentityOwnership sets NonHumanIdentityOwnership field to given value.

### HasNonHumanIdentityOwnership

`func (o *Intelidentityenvelope) HasNonHumanIdentityOwnership() bool`

HasNonHumanIdentityOwnership returns a boolean if a field has been set.

### GetAccounts

`func (o *Intelidentityenvelope) GetAccounts() Intelmachineaccountsslice`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *Intelidentityenvelope) GetAccountsOk() (*Intelmachineaccountsslice, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *Intelidentityenvelope) SetAccounts(v Intelmachineaccountsslice)`

SetAccounts sets Accounts field to given value.


### GetPrivilegedAccess

`func (o *Intelidentityenvelope) GetPrivilegedAccess() IntelPrivilegedAccessSlice`

GetPrivilegedAccess returns the PrivilegedAccess field if non-nil, zero value otherwise.

### GetPrivilegedAccessOk

`func (o *Intelidentityenvelope) GetPrivilegedAccessOk() (*IntelPrivilegedAccessSlice, bool)`

GetPrivilegedAccessOk returns a tuple with the PrivilegedAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegedAccess

`func (o *Intelidentityenvelope) SetPrivilegedAccess(v IntelPrivilegedAccessSlice)`

SetPrivilegedAccess sets PrivilegedAccess field to given value.


### GetOutliers

`func (o *Intelidentityenvelope) GetOutliers() IntelOutliersSlice`

GetOutliers returns the Outliers field if non-nil, zero value otherwise.

### GetOutliersOk

`func (o *Intelidentityenvelope) GetOutliersOk() (*IntelOutliersSlice, bool)`

GetOutliersOk returns a tuple with the Outliers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutliers

`func (o *Intelidentityenvelope) SetOutliers(v IntelOutliersSlice)`

SetOutliers sets Outliers field to given value.

### HasOutliers

`func (o *Intelidentityenvelope) HasOutliers() bool`

HasOutliers returns a boolean if a field has been set.

### GetAccessHistory

`func (o *Intelidentityenvelope) GetAccessHistory() IntelAccessHistory`

GetAccessHistory returns the AccessHistory field if non-nil, zero value otherwise.

### GetAccessHistoryOk

`func (o *Intelidentityenvelope) GetAccessHistoryOk() (*IntelAccessHistory, bool)`

GetAccessHistoryOk returns a tuple with the AccessHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessHistory

`func (o *Intelidentityenvelope) SetAccessHistory(v IntelAccessHistory)`

SetAccessHistory sets AccessHistory field to given value.


### GetMatchConfidence

`func (o *Intelidentityenvelope) GetMatchConfidence() string`

GetMatchConfidence returns the MatchConfidence field if non-nil, zero value otherwise.

### GetMatchConfidenceOk

`func (o *Intelidentityenvelope) GetMatchConfidenceOk() (*string, bool)`

GetMatchConfidenceOk returns a tuple with the MatchConfidence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchConfidence

`func (o *Intelidentityenvelope) SetMatchConfidence(v string)`

SetMatchConfidence sets MatchConfidence field to given value.

### HasMatchConfidence

`func (o *Intelidentityenvelope) HasMatchConfidence() bool`

HasMatchConfidence returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Intelidentityenvelope) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Intelidentityenvelope) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Intelidentityenvelope) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.


### GetDatasetId

`func (o *Intelidentityenvelope) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *Intelidentityenvelope) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *Intelidentityenvelope) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *Intelidentityenvelope) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### SetDatasetIdNil

`func (o *Intelidentityenvelope) SetDatasetIdNil(b bool)`

 SetDatasetIdNil sets the value for DatasetId to be an explicit nil

### UnsetDatasetId
`func (o *Intelidentityenvelope) UnsetDatasetId()`

UnsetDatasetId ensures that no value is present for DatasetId, not even an explicit nil
### GetSource

`func (o *Intelidentityenvelope) GetSource() Intelmachinesourcewire`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Intelidentityenvelope) GetSourceOk() (*Intelmachinesourcewire, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Intelidentityenvelope) SetSource(v Intelmachinesourcewire)`

SetSource sets Source field to given value.

### HasSource

`func (o *Intelidentityenvelope) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *Intelidentityenvelope) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *Intelidentityenvelope) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetExistsOnSource

`func (o *Intelidentityenvelope) GetExistsOnSource() string`

GetExistsOnSource returns the ExistsOnSource field if non-nil, zero value otherwise.

### GetExistsOnSourceOk

`func (o *Intelidentityenvelope) GetExistsOnSourceOk() (*string, bool)`

GetExistsOnSourceOk returns a tuple with the ExistsOnSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistsOnSource

`func (o *Intelidentityenvelope) SetExistsOnSource(v string)`

SetExistsOnSource sets ExistsOnSource field to given value.

### HasExistsOnSource

`func (o *Intelidentityenvelope) HasExistsOnSource() bool`

HasExistsOnSource returns a boolean if a field has been set.

### SetExistsOnSourceNil

`func (o *Intelidentityenvelope) SetExistsOnSourceNil(b bool)`

 SetExistsOnSourceNil sets the value for ExistsOnSource to be an explicit nil

### UnsetExistsOnSource
`func (o *Intelidentityenvelope) UnsetExistsOnSource()`

UnsetExistsOnSource ensures that no value is present for ExistsOnSource, not even an explicit nil
### GetManuallyEdited

`func (o *Intelidentityenvelope) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *Intelidentityenvelope) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *Intelidentityenvelope) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *Intelidentityenvelope) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.

### GetManuallyCreated

`func (o *Intelidentityenvelope) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *Intelidentityenvelope) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *Intelidentityenvelope) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *Intelidentityenvelope) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetOwners

`func (o *Intelidentityenvelope) GetOwners() Intelmachineidentityowners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Intelidentityenvelope) GetOwnersOk() (*Intelmachineidentityowners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Intelidentityenvelope) SetOwners(v Intelmachineidentityowners)`

SetOwners sets Owners field to given value.


### GetUserEntitlements

`func (o *Intelidentityenvelope) GetUserEntitlements() []Intelmachineuserentitlement`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *Intelidentityenvelope) GetUserEntitlementsOk() (*[]Intelmachineuserentitlement, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *Intelidentityenvelope) SetUserEntitlements(v []Intelmachineuserentitlement)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *Intelidentityenvelope) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.

### GetDerived

`func (o *Intelidentityenvelope) GetDerived() Intelmachinederived`

GetDerived returns the Derived field if non-nil, zero value otherwise.

### GetDerivedOk

`func (o *Intelidentityenvelope) GetDerivedOk() (*Intelmachinederived, bool)`

GetDerivedOk returns a tuple with the Derived field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDerived

`func (o *Intelidentityenvelope) SetDerived(v Intelmachinederived)`

SetDerived sets Derived field to given value.



