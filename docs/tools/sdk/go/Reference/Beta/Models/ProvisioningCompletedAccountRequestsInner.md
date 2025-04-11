---
id: beta-provisioning-completed-account-requests-inner
title: ProvisioningCompletedAccountRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningCompletedAccountRequestsInner', 'BetaProvisioningCompletedAccountRequestsInner'] 
slug: /tools/sdk/go/beta/models/provisioning-completed-account-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInner', 'BetaProvisioningCompletedAccountRequestsInner']
---

# ProvisioningCompletedAccountRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**ProvisioningCompletedAccountRequestsInnerSource**](provisioning-completed-account-requests-inner-source) |  | 
**AccountId** | Pointer to **string** | Unique idenfier of the account being provisioned. | [optional] 
**AccountOperation** | **string** | Provisioning operation. | 
**ProvisioningResult** | **map[string]interface{}** | Overall result of the provisioning transaction. | 
**ProvisioningTarget** | **string** | Nme of the selected provisioning channel selected. This could be the same as the source, or it could be a Service Desk Integration Module (SDIM). | 
**TicketId** | Pointer to **NullableString** | Reference to a tracking number for if this is sent to a SDIM. | [optional] 
**AttributeRequests** | Pointer to [**[]ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner**](provisioning-completed-account-requests-inner-attribute-requests-inner) | List of attributes to include in the provisioning transaction. | [optional] 

## Methods

### NewProvisioningCompletedAccountRequestsInner

`func NewProvisioningCompletedAccountRequestsInner(source ProvisioningCompletedAccountRequestsInnerSource, accountOperation string, provisioningResult map[string]interface{}, provisioningTarget string, ) *ProvisioningCompletedAccountRequestsInner`

NewProvisioningCompletedAccountRequestsInner instantiates a new ProvisioningCompletedAccountRequestsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningCompletedAccountRequestsInnerWithDefaults

`func NewProvisioningCompletedAccountRequestsInnerWithDefaults() *ProvisioningCompletedAccountRequestsInner`

NewProvisioningCompletedAccountRequestsInnerWithDefaults instantiates a new ProvisioningCompletedAccountRequestsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *ProvisioningCompletedAccountRequestsInner) GetSource() ProvisioningCompletedAccountRequestsInnerSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ProvisioningCompletedAccountRequestsInner) GetSourceOk() (*ProvisioningCompletedAccountRequestsInnerSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ProvisioningCompletedAccountRequestsInner) SetSource(v ProvisioningCompletedAccountRequestsInnerSource)`

SetSource sets Source field to given value.


### GetAccountId

`func (o *ProvisioningCompletedAccountRequestsInner) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ProvisioningCompletedAccountRequestsInner) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ProvisioningCompletedAccountRequestsInner) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ProvisioningCompletedAccountRequestsInner) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountOperation

`func (o *ProvisioningCompletedAccountRequestsInner) GetAccountOperation() string`

GetAccountOperation returns the AccountOperation field if non-nil, zero value otherwise.

### GetAccountOperationOk

`func (o *ProvisioningCompletedAccountRequestsInner) GetAccountOperationOk() (*string, bool)`

GetAccountOperationOk returns a tuple with the AccountOperation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountOperation

`func (o *ProvisioningCompletedAccountRequestsInner) SetAccountOperation(v string)`

SetAccountOperation sets AccountOperation field to given value.


### GetProvisioningResult

`func (o *ProvisioningCompletedAccountRequestsInner) GetProvisioningResult() map[string]interface{}`

GetProvisioningResult returns the ProvisioningResult field if non-nil, zero value otherwise.

### GetProvisioningResultOk

`func (o *ProvisioningCompletedAccountRequestsInner) GetProvisioningResultOk() (*map[string]interface{}, bool)`

GetProvisioningResultOk returns a tuple with the ProvisioningResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningResult

`func (o *ProvisioningCompletedAccountRequestsInner) SetProvisioningResult(v map[string]interface{})`

SetProvisioningResult sets ProvisioningResult field to given value.


### GetProvisioningTarget

`func (o *ProvisioningCompletedAccountRequestsInner) GetProvisioningTarget() string`

GetProvisioningTarget returns the ProvisioningTarget field if non-nil, zero value otherwise.

### GetProvisioningTargetOk

`func (o *ProvisioningCompletedAccountRequestsInner) GetProvisioningTargetOk() (*string, bool)`

GetProvisioningTargetOk returns a tuple with the ProvisioningTarget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningTarget

`func (o *ProvisioningCompletedAccountRequestsInner) SetProvisioningTarget(v string)`

SetProvisioningTarget sets ProvisioningTarget field to given value.


### GetTicketId

`func (o *ProvisioningCompletedAccountRequestsInner) GetTicketId() string`

GetTicketId returns the TicketId field if non-nil, zero value otherwise.

### GetTicketIdOk

`func (o *ProvisioningCompletedAccountRequestsInner) GetTicketIdOk() (*string, bool)`

GetTicketIdOk returns a tuple with the TicketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicketId

`func (o *ProvisioningCompletedAccountRequestsInner) SetTicketId(v string)`

SetTicketId sets TicketId field to given value.

### HasTicketId

`func (o *ProvisioningCompletedAccountRequestsInner) HasTicketId() bool`

HasTicketId returns a boolean if a field has been set.

### SetTicketIdNil

`func (o *ProvisioningCompletedAccountRequestsInner) SetTicketIdNil(b bool)`

 SetTicketIdNil sets the value for TicketId to be an explicit nil

### UnsetTicketId
`func (o *ProvisioningCompletedAccountRequestsInner) UnsetTicketId()`

UnsetTicketId ensures that no value is present for TicketId, not even an explicit nil
### GetAttributeRequests

`func (o *ProvisioningCompletedAccountRequestsInner) GetAttributeRequests() []ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner`

GetAttributeRequests returns the AttributeRequests field if non-nil, zero value otherwise.

### GetAttributeRequestsOk

`func (o *ProvisioningCompletedAccountRequestsInner) GetAttributeRequestsOk() (*[]ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner, bool)`

GetAttributeRequestsOk returns a tuple with the AttributeRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeRequests

`func (o *ProvisioningCompletedAccountRequestsInner) SetAttributeRequests(v []ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner)`

SetAttributeRequests sets AttributeRequests field to given value.

### HasAttributeRequests

`func (o *ProvisioningCompletedAccountRequestsInner) HasAttributeRequests() bool`

HasAttributeRequests returns a boolean if a field has been set.

### SetAttributeRequestsNil

`func (o *ProvisioningCompletedAccountRequestsInner) SetAttributeRequestsNil(b bool)`

 SetAttributeRequestsNil sets the value for AttributeRequests to be an explicit nil

### UnsetAttributeRequests
`func (o *ProvisioningCompletedAccountRequestsInner) UnsetAttributeRequests()`

UnsetAttributeRequests ensures that no value is present for AttributeRequests, not even an explicit nil

