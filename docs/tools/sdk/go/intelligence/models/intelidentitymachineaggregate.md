# Intelidentitymachineaggregate

# Intelidentitymachineaggregate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identity Security Cloud identifier for this non-human identity. | 
**Type** | **string** | Identity type for the matched record. | 
**DisplayName** | Pointer to **string** | Preferred display name for the non-human identity. | [optional] 
**Description** | Pointer to **NullableString** | Optional description from upstream when present. | [optional] 
**Subtype** | Pointer to **NullableString** | Sub-classification label for that NHI. | [optional] 
**Created** | Pointer to **SailPointTime** | Timestamp when the identity record was created in Identity Security Cloud. | [optional] 
**Modified** | Pointer to **SailPointTime** | Timestamp when the identity record was last modified in Identity Security Cloud. | [optional] 
**MatchConfidence** | Pointer to **string** | Match quality for opaque prefix resolution; omitted for direct id eq and exact opaque matches. | [optional] 
**IdentityGraph** | Pointer to [**Intelidentitygraphlink**](intelidentitygraphlink) | Omitted when the tenant lacks the idg:base license. | [optional] 
**Accounts** | [**Intelmachineaccountsslice**](intelmachineaccountsslice) |  | 
**NativeIdentity** | **string** | Native identifier on the source system. | 
**DatasetId** | Pointer to **NullableString** | Dataset identifier from upstream machine-identity services when present. | [optional] 
**Source** | Pointer to [**NullableIntelmachinesourcewire**](intelmachinesourcewire) | Source metadata for the machine identity when present upstream. | [optional] 
**ExistsOnSource** | Pointer to **NullableString** | Upstream existsOnSource value. Wire uses uppercase strings such as TRUE or FALSE. | [optional] 
**ManuallyEdited** | Pointer to **bool** | True when an administrator manually edited machine identity attributes. | [optional] [default to false]
**ManuallyCreated** | Pointer to **bool** | True when the machine identity was created manually in Identity Security Cloud. | [optional] [default to false]
**Owners** | [**Intelmachineidentityowners**](intelmachineidentityowners) |  | 
**UserEntitlements** | Pointer to [**[]Intelmachineuserentitlement**](intelmachineuserentitlement) | Entitlements associated with the machine identity from upstream. | [optional] 
**Attributes** | **map[string]interface\{\}** | Connector or runtime metadata; empty object when absent upstream. | 
**Derived** | [**Intelmachinederived**](intelmachinederived) |  | 

## Methods

### NewIntelidentitymachineaggregate

`func NewIntelidentitymachineaggregate(id string, type_ string, accounts Intelmachineaccountsslice, nativeIdentity string, owners Intelmachineidentityowners, attributes map[string]interface{}, derived Intelmachinederived, ) *Intelidentitymachineaggregate`

NewIntelidentitymachineaggregate instantiates a new Intelidentitymachineaggregate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelidentitymachineaggregateWithDefaults

`func NewIntelidentitymachineaggregateWithDefaults() *Intelidentitymachineaggregate`

NewIntelidentitymachineaggregateWithDefaults instantiates a new Intelidentitymachineaggregate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Intelidentitymachineaggregate) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Intelidentitymachineaggregate) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Intelidentitymachineaggregate) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *Intelidentitymachineaggregate) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Intelidentitymachineaggregate) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Intelidentitymachineaggregate) SetType(v string)`

SetType sets Type field to given value.


### GetDisplayName

`func (o *Intelidentitymachineaggregate) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Intelidentitymachineaggregate) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Intelidentitymachineaggregate) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Intelidentitymachineaggregate) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *Intelidentitymachineaggregate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Intelidentitymachineaggregate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Intelidentitymachineaggregate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Intelidentitymachineaggregate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Intelidentitymachineaggregate) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Intelidentitymachineaggregate) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSubtype

`func (o *Intelidentitymachineaggregate) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *Intelidentitymachineaggregate) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *Intelidentitymachineaggregate) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.

### HasSubtype

`func (o *Intelidentitymachineaggregate) HasSubtype() bool`

HasSubtype returns a boolean if a field has been set.

### SetSubtypeNil

`func (o *Intelidentitymachineaggregate) SetSubtypeNil(b bool)`

 SetSubtypeNil sets the value for Subtype to be an explicit nil

### UnsetSubtype
`func (o *Intelidentitymachineaggregate) UnsetSubtype()`

UnsetSubtype ensures that no value is present for Subtype, not even an explicit nil
### GetCreated

`func (o *Intelidentitymachineaggregate) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Intelidentitymachineaggregate) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Intelidentitymachineaggregate) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Intelidentitymachineaggregate) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Intelidentitymachineaggregate) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Intelidentitymachineaggregate) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Intelidentitymachineaggregate) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Intelidentitymachineaggregate) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetMatchConfidence

`func (o *Intelidentitymachineaggregate) GetMatchConfidence() string`

GetMatchConfidence returns the MatchConfidence field if non-nil, zero value otherwise.

### GetMatchConfidenceOk

`func (o *Intelidentitymachineaggregate) GetMatchConfidenceOk() (*string, bool)`

GetMatchConfidenceOk returns a tuple with the MatchConfidence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchConfidence

`func (o *Intelidentitymachineaggregate) SetMatchConfidence(v string)`

SetMatchConfidence sets MatchConfidence field to given value.

### HasMatchConfidence

`func (o *Intelidentitymachineaggregate) HasMatchConfidence() bool`

HasMatchConfidence returns a boolean if a field has been set.

### GetIdentityGraph

`func (o *Intelidentitymachineaggregate) GetIdentityGraph() Intelidentitygraphlink`

GetIdentityGraph returns the IdentityGraph field if non-nil, zero value otherwise.

### GetIdentityGraphOk

`func (o *Intelidentitymachineaggregate) GetIdentityGraphOk() (*Intelidentitygraphlink, bool)`

GetIdentityGraphOk returns a tuple with the IdentityGraph field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityGraph

`func (o *Intelidentitymachineaggregate) SetIdentityGraph(v Intelidentitygraphlink)`

SetIdentityGraph sets IdentityGraph field to given value.

### HasIdentityGraph

`func (o *Intelidentitymachineaggregate) HasIdentityGraph() bool`

HasIdentityGraph returns a boolean if a field has been set.

### GetAccounts

`func (o *Intelidentitymachineaggregate) GetAccounts() Intelmachineaccountsslice`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *Intelidentitymachineaggregate) GetAccountsOk() (*Intelmachineaccountsslice, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *Intelidentitymachineaggregate) SetAccounts(v Intelmachineaccountsslice)`

SetAccounts sets Accounts field to given value.


### GetNativeIdentity

`func (o *Intelidentitymachineaggregate) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Intelidentitymachineaggregate) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Intelidentitymachineaggregate) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.


### GetDatasetId

`func (o *Intelidentitymachineaggregate) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *Intelidentitymachineaggregate) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *Intelidentitymachineaggregate) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *Intelidentitymachineaggregate) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### SetDatasetIdNil

`func (o *Intelidentitymachineaggregate) SetDatasetIdNil(b bool)`

 SetDatasetIdNil sets the value for DatasetId to be an explicit nil

### UnsetDatasetId
`func (o *Intelidentitymachineaggregate) UnsetDatasetId()`

UnsetDatasetId ensures that no value is present for DatasetId, not even an explicit nil
### GetSource

`func (o *Intelidentitymachineaggregate) GetSource() Intelmachinesourcewire`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Intelidentitymachineaggregate) GetSourceOk() (*Intelmachinesourcewire, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Intelidentitymachineaggregate) SetSource(v Intelmachinesourcewire)`

SetSource sets Source field to given value.

### HasSource

`func (o *Intelidentitymachineaggregate) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *Intelidentitymachineaggregate) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *Intelidentitymachineaggregate) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetExistsOnSource

`func (o *Intelidentitymachineaggregate) GetExistsOnSource() string`

GetExistsOnSource returns the ExistsOnSource field if non-nil, zero value otherwise.

### GetExistsOnSourceOk

`func (o *Intelidentitymachineaggregate) GetExistsOnSourceOk() (*string, bool)`

GetExistsOnSourceOk returns a tuple with the ExistsOnSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistsOnSource

`func (o *Intelidentitymachineaggregate) SetExistsOnSource(v string)`

SetExistsOnSource sets ExistsOnSource field to given value.

### HasExistsOnSource

`func (o *Intelidentitymachineaggregate) HasExistsOnSource() bool`

HasExistsOnSource returns a boolean if a field has been set.

### SetExistsOnSourceNil

`func (o *Intelidentitymachineaggregate) SetExistsOnSourceNil(b bool)`

 SetExistsOnSourceNil sets the value for ExistsOnSource to be an explicit nil

### UnsetExistsOnSource
`func (o *Intelidentitymachineaggregate) UnsetExistsOnSource()`

UnsetExistsOnSource ensures that no value is present for ExistsOnSource, not even an explicit nil
### GetManuallyEdited

`func (o *Intelidentitymachineaggregate) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *Intelidentitymachineaggregate) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *Intelidentitymachineaggregate) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *Intelidentitymachineaggregate) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.

### GetManuallyCreated

`func (o *Intelidentitymachineaggregate) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *Intelidentitymachineaggregate) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *Intelidentitymachineaggregate) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *Intelidentitymachineaggregate) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetOwners

`func (o *Intelidentitymachineaggregate) GetOwners() Intelmachineidentityowners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Intelidentitymachineaggregate) GetOwnersOk() (*Intelmachineidentityowners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Intelidentitymachineaggregate) SetOwners(v Intelmachineidentityowners)`

SetOwners sets Owners field to given value.


### GetUserEntitlements

`func (o *Intelidentitymachineaggregate) GetUserEntitlements() []Intelmachineuserentitlement`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *Intelidentitymachineaggregate) GetUserEntitlementsOk() (*[]Intelmachineuserentitlement, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *Intelidentitymachineaggregate) SetUserEntitlements(v []Intelmachineuserentitlement)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *Intelidentitymachineaggregate) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.

### GetAttributes

`func (o *Intelidentitymachineaggregate) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Intelidentitymachineaggregate) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Intelidentitymachineaggregate) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetDerived

`func (o *Intelidentitymachineaggregate) GetDerived() Intelmachinederived`

GetDerived returns the Derived field if non-nil, zero value otherwise.

### GetDerivedOk

`func (o *Intelidentitymachineaggregate) GetDerivedOk() (*Intelmachinederived, bool)`

GetDerivedOk returns a tuple with the Derived field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDerived

`func (o *Intelidentitymachineaggregate) SetDerived(v Intelmachinederived)`

SetDerived sets Derived field to given value.



