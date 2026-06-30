---
id: v1-accessrequestitemresponse
title: Accessrequestitemresponse
pagination_label: Accessrequestitemresponse
sidebar_label: Accessrequestitemresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestitemresponse', 'V1Accessrequestitemresponse'] 
slug: /tools/sdk/go/identityhistory/models/accessrequestitemresponse
tags: ['SDK', 'Software Development Kit', 'Accessrequestitemresponse', 'V1Accessrequestitemresponse']
---

# Accessrequestitemresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to **string** | the access request item operation | [optional] 
**AccessItemType** | Pointer to **string** | the access item type | [optional] 
**Name** | Pointer to **string** | the name of access request item | [optional] 
**Decision** | Pointer to **string** | the final decision for the access request | [optional] 
**Description** | Pointer to **string** | the description of access request item | [optional] 
**SourceId** | Pointer to **string** | the source id | [optional] 
**SourceName** | Pointer to **string** | the source Name | [optional] 
**ApprovalInfos** | Pointer to [**[]Approvalinforesponse**](approvalinforesponse) |  | [optional] 

## Methods

### NewAccessrequestitemresponse

`func NewAccessrequestitemresponse() *Accessrequestitemresponse`

NewAccessrequestitemresponse instantiates a new Accessrequestitemresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestitemresponseWithDefaults

`func NewAccessrequestitemresponseWithDefaults() *Accessrequestitemresponse`

NewAccessrequestitemresponseWithDefaults instantiates a new Accessrequestitemresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Accessrequestitemresponse) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Accessrequestitemresponse) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Accessrequestitemresponse) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Accessrequestitemresponse) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetAccessItemType

`func (o *Accessrequestitemresponse) GetAccessItemType() string`

GetAccessItemType returns the AccessItemType field if non-nil, zero value otherwise.

### GetAccessItemTypeOk

`func (o *Accessrequestitemresponse) GetAccessItemTypeOk() (*string, bool)`

GetAccessItemTypeOk returns a tuple with the AccessItemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemType

`func (o *Accessrequestitemresponse) SetAccessItemType(v string)`

SetAccessItemType sets AccessItemType field to given value.

### HasAccessItemType

`func (o *Accessrequestitemresponse) HasAccessItemType() bool`

HasAccessItemType returns a boolean if a field has been set.

### GetName

`func (o *Accessrequestitemresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessrequestitemresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessrequestitemresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessrequestitemresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDecision

`func (o *Accessrequestitemresponse) GetDecision() string`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *Accessrequestitemresponse) GetDecisionOk() (*string, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *Accessrequestitemresponse) SetDecision(v string)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *Accessrequestitemresponse) HasDecision() bool`

HasDecision returns a boolean if a field has been set.

### GetDescription

`func (o *Accessrequestitemresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accessrequestitemresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accessrequestitemresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accessrequestitemresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSourceId

`func (o *Accessrequestitemresponse) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Accessrequestitemresponse) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Accessrequestitemresponse) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Accessrequestitemresponse) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *Accessrequestitemresponse) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Accessrequestitemresponse) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Accessrequestitemresponse) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Accessrequestitemresponse) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetApprovalInfos

`func (o *Accessrequestitemresponse) GetApprovalInfos() []Approvalinforesponse`

GetApprovalInfos returns the ApprovalInfos field if non-nil, zero value otherwise.

### GetApprovalInfosOk

`func (o *Accessrequestitemresponse) GetApprovalInfosOk() (*[]Approvalinforesponse, bool)`

GetApprovalInfosOk returns a tuple with the ApprovalInfos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalInfos

`func (o *Accessrequestitemresponse) SetApprovalInfos(v []Approvalinforesponse)`

SetApprovalInfos sets ApprovalInfos field to given value.

### HasApprovalInfos

`func (o *Accessrequestitemresponse) HasApprovalInfos() bool`

HasApprovalInfos returns a boolean if a field has been set.


