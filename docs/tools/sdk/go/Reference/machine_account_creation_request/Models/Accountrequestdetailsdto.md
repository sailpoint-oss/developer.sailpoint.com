---
id: v1-accountrequestdetailsdto
title: Accountrequestdetailsdto
pagination_label: Accountrequestdetailsdto
sidebar_label: Accountrequestdetailsdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountrequestdetailsdto', 'V1Accountrequestdetailsdto'] 
slug: /tools/sdk/go/machineaccountcreationrequest/models/accountrequestdetailsdto
tags: ['SDK', 'Software Development Kit', 'Accountrequestdetailsdto', 'V1Accountrequestdetailsdto']
---

# Accountrequestdetailsdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountRequestId** | Pointer to **string** | Account request ID. | [optional] 
**RequestType** | Pointer to **string** | Type of the account request. | [optional] 
**CreatedAt** | Pointer to **SailPointTime** | Machine account creation request creation date and time. | [optional] [readonly] 
**CompletedAt** | Pointer to **NullableTime** | Machine account creation request completion date and time. | [optional] [readonly] 
**OverallStatus** | Pointer to **string** | Overall status of the creation request. | [optional] 
**Requester** | Pointer to [**AccountrequestdetailsdtoRequester**](accountrequestdetailsdto-requester) |  | [optional] 
**AccountRequestPhases** | Pointer to [**[]Accountrequestphase**](accountrequestphase) | List of account request phases. | [optional] 
**ErrorDetails** | Pointer to **NullableString** | Detailed error information. | [optional] 

## Methods

### NewAccountrequestdetailsdto

`func NewAccountrequestdetailsdto() *Accountrequestdetailsdto`

NewAccountrequestdetailsdto instantiates a new Accountrequestdetailsdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountrequestdetailsdtoWithDefaults

`func NewAccountrequestdetailsdtoWithDefaults() *Accountrequestdetailsdto`

NewAccountrequestdetailsdtoWithDefaults instantiates a new Accountrequestdetailsdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountRequestId

`func (o *Accountrequestdetailsdto) GetAccountRequestId() string`

GetAccountRequestId returns the AccountRequestId field if non-nil, zero value otherwise.

### GetAccountRequestIdOk

`func (o *Accountrequestdetailsdto) GetAccountRequestIdOk() (*string, bool)`

GetAccountRequestIdOk returns a tuple with the AccountRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequestId

`func (o *Accountrequestdetailsdto) SetAccountRequestId(v string)`

SetAccountRequestId sets AccountRequestId field to given value.

### HasAccountRequestId

`func (o *Accountrequestdetailsdto) HasAccountRequestId() bool`

HasAccountRequestId returns a boolean if a field has been set.

### GetRequestType

`func (o *Accountrequestdetailsdto) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *Accountrequestdetailsdto) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *Accountrequestdetailsdto) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *Accountrequestdetailsdto) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Accountrequestdetailsdto) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Accountrequestdetailsdto) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Accountrequestdetailsdto) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Accountrequestdetailsdto) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *Accountrequestdetailsdto) GetCompletedAt() SailPointTime`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *Accountrequestdetailsdto) GetCompletedAtOk() (*SailPointTime, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *Accountrequestdetailsdto) SetCompletedAt(v SailPointTime)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *Accountrequestdetailsdto) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### SetCompletedAtNil

`func (o *Accountrequestdetailsdto) SetCompletedAtNil(b bool)`

 SetCompletedAtNil sets the value for CompletedAt to be an explicit nil

### UnsetCompletedAt
`func (o *Accountrequestdetailsdto) UnsetCompletedAt()`

UnsetCompletedAt ensures that no value is present for CompletedAt, not even an explicit nil
### GetOverallStatus

`func (o *Accountrequestdetailsdto) GetOverallStatus() string`

GetOverallStatus returns the OverallStatus field if non-nil, zero value otherwise.

### GetOverallStatusOk

`func (o *Accountrequestdetailsdto) GetOverallStatusOk() (*string, bool)`

GetOverallStatusOk returns a tuple with the OverallStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverallStatus

`func (o *Accountrequestdetailsdto) SetOverallStatus(v string)`

SetOverallStatus sets OverallStatus field to given value.

### HasOverallStatus

`func (o *Accountrequestdetailsdto) HasOverallStatus() bool`

HasOverallStatus returns a boolean if a field has been set.

### GetRequester

`func (o *Accountrequestdetailsdto) GetRequester() AccountrequestdetailsdtoRequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Accountrequestdetailsdto) GetRequesterOk() (*AccountrequestdetailsdtoRequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Accountrequestdetailsdto) SetRequester(v AccountrequestdetailsdtoRequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Accountrequestdetailsdto) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetAccountRequestPhases

`func (o *Accountrequestdetailsdto) GetAccountRequestPhases() []Accountrequestphase`

GetAccountRequestPhases returns the AccountRequestPhases field if non-nil, zero value otherwise.

### GetAccountRequestPhasesOk

`func (o *Accountrequestdetailsdto) GetAccountRequestPhasesOk() (*[]Accountrequestphase, bool)`

GetAccountRequestPhasesOk returns a tuple with the AccountRequestPhases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequestPhases

`func (o *Accountrequestdetailsdto) SetAccountRequestPhases(v []Accountrequestphase)`

SetAccountRequestPhases sets AccountRequestPhases field to given value.

### HasAccountRequestPhases

`func (o *Accountrequestdetailsdto) HasAccountRequestPhases() bool`

HasAccountRequestPhases returns a boolean if a field has been set.

### GetErrorDetails

`func (o *Accountrequestdetailsdto) GetErrorDetails() string`

GetErrorDetails returns the ErrorDetails field if non-nil, zero value otherwise.

### GetErrorDetailsOk

`func (o *Accountrequestdetailsdto) GetErrorDetailsOk() (*string, bool)`

GetErrorDetailsOk returns a tuple with the ErrorDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDetails

`func (o *Accountrequestdetailsdto) SetErrorDetails(v string)`

SetErrorDetails sets ErrorDetails field to given value.

### HasErrorDetails

`func (o *Accountrequestdetailsdto) HasErrorDetails() bool`

HasErrorDetails returns a boolean if a field has been set.

### SetErrorDetailsNil

`func (o *Accountrequestdetailsdto) SetErrorDetailsNil(b bool)`

 SetErrorDetailsNil sets the value for ErrorDetails to be an explicit nil

### UnsetErrorDetails
`func (o *Accountrequestdetailsdto) UnsetErrorDetails()`

UnsetErrorDetails ensures that no value is present for ErrorDetails, not even an explicit nil

