# Intelmachinederived

# Intelmachinederived

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsOrphaned** | **bool** | Flags NHIs without a valid active owner for prioritization. | 
**AuthorizedHumanIdentities** | [**[]Intelmachineentityref**](intelmachineentityref) | Humans who can invoke or access this NHI agent. | 
**BlastRadiusSummary** | [**Intelblastradiussummary**](intelblastradiussummary) |  | 

## Methods

### NewIntelmachinederived

`func NewIntelmachinederived(isOrphaned bool, authorizedHumanIdentities []Intelmachineentityref, blastRadiusSummary Intelblastradiussummary, ) *Intelmachinederived`

NewIntelmachinederived instantiates a new Intelmachinederived object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelmachinederivedWithDefaults

`func NewIntelmachinederivedWithDefaults() *Intelmachinederived`

NewIntelmachinederivedWithDefaults instantiates a new Intelmachinederived object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsOrphaned

`func (o *Intelmachinederived) GetIsOrphaned() bool`

GetIsOrphaned returns the IsOrphaned field if non-nil, zero value otherwise.

### GetIsOrphanedOk

`func (o *Intelmachinederived) GetIsOrphanedOk() (*bool, bool)`

GetIsOrphanedOk returns a tuple with the IsOrphaned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOrphaned

`func (o *Intelmachinederived) SetIsOrphaned(v bool)`

SetIsOrphaned sets IsOrphaned field to given value.


### GetAuthorizedHumanIdentities

`func (o *Intelmachinederived) GetAuthorizedHumanIdentities() []Intelmachineentityref`

GetAuthorizedHumanIdentities returns the AuthorizedHumanIdentities field if non-nil, zero value otherwise.

### GetAuthorizedHumanIdentitiesOk

`func (o *Intelmachinederived) GetAuthorizedHumanIdentitiesOk() (*[]Intelmachineentityref, bool)`

GetAuthorizedHumanIdentitiesOk returns a tuple with the AuthorizedHumanIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizedHumanIdentities

`func (o *Intelmachinederived) SetAuthorizedHumanIdentities(v []Intelmachineentityref)`

SetAuthorizedHumanIdentities sets AuthorizedHumanIdentities field to given value.


### GetBlastRadiusSummary

`func (o *Intelmachinederived) GetBlastRadiusSummary() Intelblastradiussummary`

GetBlastRadiusSummary returns the BlastRadiusSummary field if non-nil, zero value otherwise.

### GetBlastRadiusSummaryOk

`func (o *Intelmachinederived) GetBlastRadiusSummaryOk() (*Intelblastradiussummary, bool)`

GetBlastRadiusSummaryOk returns a tuple with the BlastRadiusSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlastRadiusSummary

`func (o *Intelmachinederived) SetBlastRadiusSummary(v Intelblastradiussummary)`

SetBlastRadiusSummary sets BlastRadiusSummary field to given value.



