---
id: v1-accessreviewitem
title: Accessreviewitem
pagination_label: Accessreviewitem
sidebar_label: Accessreviewitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessreviewitem', 'V1Accessreviewitem'] 
slug: /tools/sdk/go/certifications/models/accessreviewitem
tags: ['SDK', 'Software Development Kit', 'Accessreviewitem', 'V1Accessreviewitem']
---

# Accessreviewitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessSummary** | Pointer to [**Accesssummary**](accesssummary) |  | [optional] 
**IdentitySummary** | Pointer to [**Certificationidentitysummary**](certificationidentitysummary) |  | [optional] 
**Id** | Pointer to **string** | The review item's id | [optional] 
**Completed** | Pointer to **bool** | Whether the review item is complete | [optional] 
**NewAccess** | Pointer to **bool** | Indicates whether the review item is for new access to a source | [optional] 
**Decision** | Pointer to [**Certificationdecision**](certificationdecision) |  | [optional] 
**Comments** | Pointer to **NullableString** | Comments for this review item | [optional] 

## Methods

### NewAccessreviewitem

`func NewAccessreviewitem() *Accessreviewitem`

NewAccessreviewitem instantiates a new Accessreviewitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessreviewitemWithDefaults

`func NewAccessreviewitemWithDefaults() *Accessreviewitem`

NewAccessreviewitemWithDefaults instantiates a new Accessreviewitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessSummary

`func (o *Accessreviewitem) GetAccessSummary() Accesssummary`

GetAccessSummary returns the AccessSummary field if non-nil, zero value otherwise.

### GetAccessSummaryOk

`func (o *Accessreviewitem) GetAccessSummaryOk() (*Accesssummary, bool)`

GetAccessSummaryOk returns a tuple with the AccessSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessSummary

`func (o *Accessreviewitem) SetAccessSummary(v Accesssummary)`

SetAccessSummary sets AccessSummary field to given value.

### HasAccessSummary

`func (o *Accessreviewitem) HasAccessSummary() bool`

HasAccessSummary returns a boolean if a field has been set.

### GetIdentitySummary

`func (o *Accessreviewitem) GetIdentitySummary() Certificationidentitysummary`

GetIdentitySummary returns the IdentitySummary field if non-nil, zero value otherwise.

### GetIdentitySummaryOk

`func (o *Accessreviewitem) GetIdentitySummaryOk() (*Certificationidentitysummary, bool)`

GetIdentitySummaryOk returns a tuple with the IdentitySummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitySummary

`func (o *Accessreviewitem) SetIdentitySummary(v Certificationidentitysummary)`

SetIdentitySummary sets IdentitySummary field to given value.

### HasIdentitySummary

`func (o *Accessreviewitem) HasIdentitySummary() bool`

HasIdentitySummary returns a boolean if a field has been set.

### GetId

`func (o *Accessreviewitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessreviewitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessreviewitem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessreviewitem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCompleted

`func (o *Accessreviewitem) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Accessreviewitem) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Accessreviewitem) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Accessreviewitem) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetNewAccess

`func (o *Accessreviewitem) GetNewAccess() bool`

GetNewAccess returns the NewAccess field if non-nil, zero value otherwise.

### GetNewAccessOk

`func (o *Accessreviewitem) GetNewAccessOk() (*bool, bool)`

GetNewAccessOk returns a tuple with the NewAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewAccess

`func (o *Accessreviewitem) SetNewAccess(v bool)`

SetNewAccess sets NewAccess field to given value.

### HasNewAccess

`func (o *Accessreviewitem) HasNewAccess() bool`

HasNewAccess returns a boolean if a field has been set.

### GetDecision

`func (o *Accessreviewitem) GetDecision() Certificationdecision`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *Accessreviewitem) GetDecisionOk() (*Certificationdecision, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *Accessreviewitem) SetDecision(v Certificationdecision)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *Accessreviewitem) HasDecision() bool`

HasDecision returns a boolean if a field has been set.

### GetComments

`func (o *Accessreviewitem) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Accessreviewitem) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Accessreviewitem) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Accessreviewitem) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *Accessreviewitem) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *Accessreviewitem) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil

