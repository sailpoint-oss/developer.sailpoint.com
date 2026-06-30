---
id: v1-campaignfilterdetails-criteria-list-inner
title: CampaignfilterdetailsCriteriaListInner
pagination_label: CampaignfilterdetailsCriteriaListInner
sidebar_label: CampaignfilterdetailsCriteriaListInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignfilterdetailsCriteriaListInner', 'V1CampaignfilterdetailsCriteriaListInner'] 
slug: /tools/sdk/go/certificationcampaignfilters/models/campaignfilterdetails-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'CampaignfilterdetailsCriteriaListInner', 'V1CampaignfilterdetailsCriteriaListInner']
---

# CampaignfilterdetailsCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Criteriatype**](criteriatype) |  | 
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

### NewCampaignfilterdetailsCriteriaListInner

`func NewCampaignfilterdetailsCriteriaListInner(type_ Criteriatype, property NullableString, value NullableString, ) *CampaignfilterdetailsCriteriaListInner`

NewCampaignfilterdetailsCriteriaListInner instantiates a new CampaignfilterdetailsCriteriaListInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignfilterdetailsCriteriaListInnerWithDefaults

`func NewCampaignfilterdetailsCriteriaListInnerWithDefaults() *CampaignfilterdetailsCriteriaListInner`

NewCampaignfilterdetailsCriteriaListInnerWithDefaults instantiates a new CampaignfilterdetailsCriteriaListInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CampaignfilterdetailsCriteriaListInner) GetType() Criteriatype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignfilterdetailsCriteriaListInner) GetTypeOk() (*Criteriatype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignfilterdetailsCriteriaListInner) SetType(v Criteriatype)`

SetType sets Type field to given value.


### GetOperation

`func (o *CampaignfilterdetailsCriteriaListInner) GetOperation() Operation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *CampaignfilterdetailsCriteriaListInner) GetOperationOk() (*Operation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *CampaignfilterdetailsCriteriaListInner) SetOperation(v Operation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *CampaignfilterdetailsCriteriaListInner) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### SetOperationNil

`func (o *CampaignfilterdetailsCriteriaListInner) SetOperationNil(b bool)`

 SetOperationNil sets the value for Operation to be an explicit nil

### UnsetOperation
`func (o *CampaignfilterdetailsCriteriaListInner) UnsetOperation()`

UnsetOperation ensures that no value is present for Operation, not even an explicit nil
### GetProperty

`func (o *CampaignfilterdetailsCriteriaListInner) GetProperty() string`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *CampaignfilterdetailsCriteriaListInner) GetPropertyOk() (*string, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *CampaignfilterdetailsCriteriaListInner) SetProperty(v string)`

SetProperty sets Property field to given value.


### SetPropertyNil

`func (o *CampaignfilterdetailsCriteriaListInner) SetPropertyNil(b bool)`

 SetPropertyNil sets the value for Property to be an explicit nil

### UnsetProperty
`func (o *CampaignfilterdetailsCriteriaListInner) UnsetProperty()`

UnsetProperty ensures that no value is present for Property, not even an explicit nil
### GetValue

`func (o *CampaignfilterdetailsCriteriaListInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CampaignfilterdetailsCriteriaListInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CampaignfilterdetailsCriteriaListInner) SetValue(v string)`

SetValue sets Value field to given value.


### SetValueNil

`func (o *CampaignfilterdetailsCriteriaListInner) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *CampaignfilterdetailsCriteriaListInner) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetNegateResult

`func (o *CampaignfilterdetailsCriteriaListInner) GetNegateResult() bool`

GetNegateResult returns the NegateResult field if non-nil, zero value otherwise.

### GetNegateResultOk

`func (o *CampaignfilterdetailsCriteriaListInner) GetNegateResultOk() (*bool, bool)`

GetNegateResultOk returns a tuple with the NegateResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegateResult

`func (o *CampaignfilterdetailsCriteriaListInner) SetNegateResult(v bool)`

SetNegateResult sets NegateResult field to given value.

### HasNegateResult

`func (o *CampaignfilterdetailsCriteriaListInner) HasNegateResult() bool`

HasNegateResult returns a boolean if a field has been set.

### GetShortCircuit

`func (o *CampaignfilterdetailsCriteriaListInner) GetShortCircuit() bool`

GetShortCircuit returns the ShortCircuit field if non-nil, zero value otherwise.

### GetShortCircuitOk

`func (o *CampaignfilterdetailsCriteriaListInner) GetShortCircuitOk() (*bool, bool)`

GetShortCircuitOk returns a tuple with the ShortCircuit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortCircuit

`func (o *CampaignfilterdetailsCriteriaListInner) SetShortCircuit(v bool)`

SetShortCircuit sets ShortCircuit field to given value.

### HasShortCircuit

`func (o *CampaignfilterdetailsCriteriaListInner) HasShortCircuit() bool`

HasShortCircuit returns a boolean if a field has been set.

### GetRecordChildMatches

`func (o *CampaignfilterdetailsCriteriaListInner) GetRecordChildMatches() bool`

GetRecordChildMatches returns the RecordChildMatches field if non-nil, zero value otherwise.

### GetRecordChildMatchesOk

`func (o *CampaignfilterdetailsCriteriaListInner) GetRecordChildMatchesOk() (*bool, bool)`

GetRecordChildMatchesOk returns a tuple with the RecordChildMatches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordChildMatches

`func (o *CampaignfilterdetailsCriteriaListInner) SetRecordChildMatches(v bool)`

SetRecordChildMatches sets RecordChildMatches field to given value.

### HasRecordChildMatches

`func (o *CampaignfilterdetailsCriteriaListInner) HasRecordChildMatches() bool`

HasRecordChildMatches returns a boolean if a field has been set.

### GetId

`func (o *CampaignfilterdetailsCriteriaListInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignfilterdetailsCriteriaListInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignfilterdetailsCriteriaListInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CampaignfilterdetailsCriteriaListInner) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *CampaignfilterdetailsCriteriaListInner) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *CampaignfilterdetailsCriteriaListInner) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetSuppressMatchedItems

`func (o *CampaignfilterdetailsCriteriaListInner) GetSuppressMatchedItems() bool`

GetSuppressMatchedItems returns the SuppressMatchedItems field if non-nil, zero value otherwise.

### GetSuppressMatchedItemsOk

`func (o *CampaignfilterdetailsCriteriaListInner) GetSuppressMatchedItemsOk() (*bool, bool)`

GetSuppressMatchedItemsOk returns a tuple with the SuppressMatchedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuppressMatchedItems

`func (o *CampaignfilterdetailsCriteriaListInner) SetSuppressMatchedItems(v bool)`

SetSuppressMatchedItems sets SuppressMatchedItems field to given value.

### HasSuppressMatchedItems

`func (o *CampaignfilterdetailsCriteriaListInner) HasSuppressMatchedItems() bool`

HasSuppressMatchedItems returns a boolean if a field has been set.

### GetChildren

`func (o *CampaignfilterdetailsCriteriaListInner) GetChildren() []map[string]interface{}`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *CampaignfilterdetailsCriteriaListInner) GetChildrenOk() (*[]map[string]interface{}, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *CampaignfilterdetailsCriteriaListInner) SetChildren(v []map[string]interface{})`

SetChildren sets Children field to given value.

### HasChildren

`func (o *CampaignfilterdetailsCriteriaListInner) HasChildren() bool`

HasChildren returns a boolean if a field has been set.


