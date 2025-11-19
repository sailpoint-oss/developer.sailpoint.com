---
id: v2024-assignment-context-dto
title: AssignmentContextDto
pagination_label: AssignmentContextDto
sidebar_label: AssignmentContextDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AssignmentContextDto', 'V2024AssignmentContextDto'] 
slug: /tools/sdk/go/v2024/models/assignment-context-dto
tags: ['SDK', 'Software Development Kit', 'AssignmentContextDto', 'V2024AssignmentContextDto']
---

# AssignmentContextDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requested** | Pointer to [**AccessRequestContext**](access-request-context) |  | [optional] 
**Matched** | Pointer to [**[]RoleMatchDto**](role-match-dto) |  | [optional] 
**ComputedDate** | Pointer to **string** | Date that the assignment will was evaluated | [optional] 

## Methods

### NewAssignmentContextDto

`func NewAssignmentContextDto() *AssignmentContextDto`

NewAssignmentContextDto instantiates a new AssignmentContextDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssignmentContextDtoWithDefaults

`func NewAssignmentContextDtoWithDefaults() *AssignmentContextDto`

NewAssignmentContextDtoWithDefaults instantiates a new AssignmentContextDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequested

`func (o *AssignmentContextDto) GetRequested() AccessRequestContext`

GetRequested returns the Requested field if non-nil, zero value otherwise.

### GetRequestedOk

`func (o *AssignmentContextDto) GetRequestedOk() (*AccessRequestContext, bool)`

GetRequestedOk returns a tuple with the Requested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequested

`func (o *AssignmentContextDto) SetRequested(v AccessRequestContext)`

SetRequested sets Requested field to given value.

### HasRequested

`func (o *AssignmentContextDto) HasRequested() bool`

HasRequested returns a boolean if a field has been set.

### GetMatched

`func (o *AssignmentContextDto) GetMatched() []RoleMatchDto`

GetMatched returns the Matched field if non-nil, zero value otherwise.

### GetMatchedOk

`func (o *AssignmentContextDto) GetMatchedOk() (*[]RoleMatchDto, bool)`

GetMatchedOk returns a tuple with the Matched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatched

`func (o *AssignmentContextDto) SetMatched(v []RoleMatchDto)`

SetMatched sets Matched field to given value.

### HasMatched

`func (o *AssignmentContextDto) HasMatched() bool`

HasMatched returns a boolean if a field has been set.

### GetComputedDate

`func (o *AssignmentContextDto) GetComputedDate() string`

GetComputedDate returns the ComputedDate field if non-nil, zero value otherwise.

### GetComputedDateOk

`func (o *AssignmentContextDto) GetComputedDateOk() (*string, bool)`

GetComputedDateOk returns a tuple with the ComputedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedDate

`func (o *AssignmentContextDto) SetComputedDate(v string)`

SetComputedDate sets ComputedDate field to given value.

### HasComputedDate

`func (o *AssignmentContextDto) HasComputedDate() bool`

HasComputedDate returns a boolean if a field has been set.


