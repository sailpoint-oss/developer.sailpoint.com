---
id: v1-bulkapproveaccessrequest
title: Bulkapproveaccessrequest
pagination_label: Bulkapproveaccessrequest
sidebar_label: Bulkapproveaccessrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkapproveaccessrequest', 'V1Bulkapproveaccessrequest'] 
slug: /tools/sdk/go/accessrequests/models/bulkapproveaccessrequest
tags: ['SDK', 'Software Development Kit', 'Bulkapproveaccessrequest', 'V1Bulkapproveaccessrequest']
---

# Bulkapproveaccessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | **[]string** | List of approval ids to approve the pending requests | 
**Comment** | **string** | Reason for approving the pending access request. | 

## Methods

### NewBulkapproveaccessrequest

`func NewBulkapproveaccessrequest(approvalIds []string, comment string, ) *Bulkapproveaccessrequest`

NewBulkapproveaccessrequest instantiates a new Bulkapproveaccessrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkapproveaccessrequestWithDefaults

`func NewBulkapproveaccessrequestWithDefaults() *Bulkapproveaccessrequest`

NewBulkapproveaccessrequestWithDefaults instantiates a new Bulkapproveaccessrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalIds

`func (o *Bulkapproveaccessrequest) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *Bulkapproveaccessrequest) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *Bulkapproveaccessrequest) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.


### GetComment

`func (o *Bulkapproveaccessrequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Bulkapproveaccessrequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Bulkapproveaccessrequest) SetComment(v string)`

SetComment sets Comment field to given value.



