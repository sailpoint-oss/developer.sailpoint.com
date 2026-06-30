---
id: v1-bulkapproverequestdto
title: Bulkapproverequestdto
pagination_label: Bulkapproverequestdto
sidebar_label: Bulkapproverequestdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkapproverequestdto', 'V1Bulkapproverequestdto'] 
slug: /tools/sdk/go/approvals/models/bulkapproverequestdto
tags: ['SDK', 'Software Development Kit', 'Bulkapproverequestdto', 'V1Bulkapproverequestdto']
---

# Bulkapproverequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | Pointer to **[]string** | Array of Approval IDs to be bulk approved | [optional] 
**Comment** | Pointer to **string** | Optional comment to include with the bulk approval request | [optional] 
**AdditionalAttributes** | Pointer to **map[string]interface{}** | Additional attributes to include with the bulk approval request | [optional] 

## Methods

### NewBulkapproverequestdto

`func NewBulkapproverequestdto() *Bulkapproverequestdto`

NewBulkapproverequestdto instantiates a new Bulkapproverequestdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkapproverequestdtoWithDefaults

`func NewBulkapproverequestdtoWithDefaults() *Bulkapproverequestdto`

NewBulkapproverequestdtoWithDefaults instantiates a new Bulkapproverequestdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalIds

`func (o *Bulkapproverequestdto) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *Bulkapproverequestdto) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *Bulkapproverequestdto) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.

### HasApprovalIds

`func (o *Bulkapproverequestdto) HasApprovalIds() bool`

HasApprovalIds returns a boolean if a field has been set.

### GetComment

`func (o *Bulkapproverequestdto) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Bulkapproverequestdto) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Bulkapproverequestdto) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Bulkapproverequestdto) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetAdditionalAttributes

`func (o *Bulkapproverequestdto) GetAdditionalAttributes() map[string]interface{}`

GetAdditionalAttributes returns the AdditionalAttributes field if non-nil, zero value otherwise.

### GetAdditionalAttributesOk

`func (o *Bulkapproverequestdto) GetAdditionalAttributesOk() (*map[string]interface{}, bool)`

GetAdditionalAttributesOk returns a tuple with the AdditionalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalAttributes

`func (o *Bulkapproverequestdto) SetAdditionalAttributes(v map[string]interface{})`

SetAdditionalAttributes sets AdditionalAttributes field to given value.

### HasAdditionalAttributes

`func (o *Bulkapproverequestdto) HasAdditionalAttributes() bool`

HasAdditionalAttributes returns a boolean if a field has been set.


