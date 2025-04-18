---
id: v2025-campaign-filter-details-criteria-list-inner
title: CampaignFilterDetailsCriteriaListInner
pagination_label: CampaignFilterDetailsCriteriaListInner
sidebar_label: CampaignFilterDetailsCriteriaListInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignFilterDetailsCriteriaListInner', 'V2025CampaignFilterDetailsCriteriaListInner'] 
slug: /tools/sdk/go/v2025/models/campaign-filter-details-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetailsCriteriaListInner', 'V2025CampaignFilterDetailsCriteriaListInner']
---

# CampaignFilterDetailsCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**CriteriaType**](criteria-type) |  | 
**Operation** | Pointer to [**NullableOperation**](operation) |  | [optional] 
**Property** | **NullableString** | Specified key from the type of criteria. | 
**Value** | **NullableString** | Value for the specified key from the type of criteria. | 
**NegateResult** | Pointer to **bool** | If true, the filter will negate the result of the criteria. | [optional] [default to false]
**ShortCircuit** | Pointer to **bool** | If true, the filter will short circuit the evaluation of the criteria. | [optional] [default to false]
**RecordChildMatches** | Pointer to **bool** | If true, the filter will record child matches for the criteria. | [optional] [default to false]
**Id** | Pointer to **NullableString** | The unique ID of the criteria. | [optional] 
**SuppressMatchedItems** | Pointer to **bool** | If this value is true, then matched items will not only be excluded from the campaign, they will also not have archived certification items created.  Such items will not appear in the exclusion report.  | [optional] [default to false]
**Children** | Pointer to **[]map[string]interface{}** | List of child criteria. | [optional] 

## Methods

### NewCampaignFilterDetailsCriteriaListInner

`func NewCampaignFilterDetailsCriteriaListInner(type_ CriteriaType, property NullableString, value NullableString, ) *CampaignFilterDetailsCriteriaListInner`

NewCampaignFilterDetailsCriteriaListInner instantiates a new CampaignFilterDetailsCriteriaListInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignFilterDetailsCriteriaListInnerWithDefaults

`func NewCampaignFilterDetailsCriteriaListInnerWithDefaults() *CampaignFilterDetailsCriteriaListInner`

NewCampaignFilterDetailsCriteriaListInnerWithDefaults instantiates a new CampaignFilterDetailsCriteriaListInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CampaignFilterDetailsCriteriaListInner) GetType() CriteriaType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetTypeOk() (*CriteriaType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignFilterDetailsCriteriaListInner) SetType(v CriteriaType)`

SetType sets Type field to given value.


### GetOperation

`func (o *CampaignFilterDetailsCriteriaListInner) GetOperation() Operation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetOperationOk() (*Operation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *CampaignFilterDetailsCriteriaListInner) SetOperation(v Operation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *CampaignFilterDetailsCriteriaListInner) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### SetOperationNil

`func (o *CampaignFilterDetailsCriteriaListInner) SetOperationNil(b bool)`

 SetOperationNil sets the value for Operation to be an explicit nil

### UnsetOperation
`func (o *CampaignFilterDetailsCriteriaListInner) UnsetOperation()`

UnsetOperation ensures that no value is present for Operation, not even an explicit nil
### GetProperty

`func (o *CampaignFilterDetailsCriteriaListInner) GetProperty() string`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetPropertyOk() (*string, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *CampaignFilterDetailsCriteriaListInner) SetProperty(v string)`

SetProperty sets Property field to given value.


### SetPropertyNil

`func (o *CampaignFilterDetailsCriteriaListInner) SetPropertyNil(b bool)`

 SetPropertyNil sets the value for Property to be an explicit nil

### UnsetProperty
`func (o *CampaignFilterDetailsCriteriaListInner) UnsetProperty()`

UnsetProperty ensures that no value is present for Property, not even an explicit nil
### GetValue

`func (o *CampaignFilterDetailsCriteriaListInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CampaignFilterDetailsCriteriaListInner) SetValue(v string)`

SetValue sets Value field to given value.


### SetValueNil

`func (o *CampaignFilterDetailsCriteriaListInner) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *CampaignFilterDetailsCriteriaListInner) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetNegateResult

`func (o *CampaignFilterDetailsCriteriaListInner) GetNegateResult() bool`

GetNegateResult returns the NegateResult field if non-nil, zero value otherwise.

### GetNegateResultOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetNegateResultOk() (*bool, bool)`

GetNegateResultOk returns a tuple with the NegateResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegateResult

`func (o *CampaignFilterDetailsCriteriaListInner) SetNegateResult(v bool)`

SetNegateResult sets NegateResult field to given value.

### HasNegateResult

`func (o *CampaignFilterDetailsCriteriaListInner) HasNegateResult() bool`

HasNegateResult returns a boolean if a field has been set.

### GetShortCircuit

`func (o *CampaignFilterDetailsCriteriaListInner) GetShortCircuit() bool`

GetShortCircuit returns the ShortCircuit field if non-nil, zero value otherwise.

### GetShortCircuitOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetShortCircuitOk() (*bool, bool)`

GetShortCircuitOk returns a tuple with the ShortCircuit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortCircuit

`func (o *CampaignFilterDetailsCriteriaListInner) SetShortCircuit(v bool)`

SetShortCircuit sets ShortCircuit field to given value.

### HasShortCircuit

`func (o *CampaignFilterDetailsCriteriaListInner) HasShortCircuit() bool`

HasShortCircuit returns a boolean if a field has been set.

### GetRecordChildMatches

`func (o *CampaignFilterDetailsCriteriaListInner) GetRecordChildMatches() bool`

GetRecordChildMatches returns the RecordChildMatches field if non-nil, zero value otherwise.

### GetRecordChildMatchesOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetRecordChildMatchesOk() (*bool, bool)`

GetRecordChildMatchesOk returns a tuple with the RecordChildMatches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordChildMatches

`func (o *CampaignFilterDetailsCriteriaListInner) SetRecordChildMatches(v bool)`

SetRecordChildMatches sets RecordChildMatches field to given value.

### HasRecordChildMatches

`func (o *CampaignFilterDetailsCriteriaListInner) HasRecordChildMatches() bool`

HasRecordChildMatches returns a boolean if a field has been set.

### GetId

`func (o *CampaignFilterDetailsCriteriaListInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignFilterDetailsCriteriaListInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CampaignFilterDetailsCriteriaListInner) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *CampaignFilterDetailsCriteriaListInner) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *CampaignFilterDetailsCriteriaListInner) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetSuppressMatchedItems

`func (o *CampaignFilterDetailsCriteriaListInner) GetSuppressMatchedItems() bool`

GetSuppressMatchedItems returns the SuppressMatchedItems field if non-nil, zero value otherwise.

### GetSuppressMatchedItemsOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetSuppressMatchedItemsOk() (*bool, bool)`

GetSuppressMatchedItemsOk returns a tuple with the SuppressMatchedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuppressMatchedItems

`func (o *CampaignFilterDetailsCriteriaListInner) SetSuppressMatchedItems(v bool)`

SetSuppressMatchedItems sets SuppressMatchedItems field to given value.

### HasSuppressMatchedItems

`func (o *CampaignFilterDetailsCriteriaListInner) HasSuppressMatchedItems() bool`

HasSuppressMatchedItems returns a boolean if a field has been set.

### GetChildren

`func (o *CampaignFilterDetailsCriteriaListInner) GetChildren() []map[string]interface{}`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetChildrenOk() (*[]map[string]interface{}, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *CampaignFilterDetailsCriteriaListInner) SetChildren(v []map[string]interface{})`

SetChildren sets Children field to given value.

### HasChildren

`func (o *CampaignFilterDetailsCriteriaListInner) HasChildren() bool`

HasChildren returns a boolean if a field has been set.


