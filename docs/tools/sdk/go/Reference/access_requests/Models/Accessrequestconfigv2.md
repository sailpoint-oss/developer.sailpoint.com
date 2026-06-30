---
id: v1-accessrequestconfigv2
title: Accessrequestconfigv2
pagination_label: Accessrequestconfigv2
sidebar_label: Accessrequestconfigv2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestconfigv2', 'V1Accessrequestconfigv2'] 
slug: /tools/sdk/go/accessrequests/models/accessrequestconfigv2
tags: ['SDK', 'Software Development Kit', 'Accessrequestconfigv2', 'V1Accessrequestconfigv2']
---

# Accessrequestconfigv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalsMustBeExternal** | Pointer to **bool** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin. | [optional] [default to false]
**ReauthorizationEnabled** | Pointer to **bool** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to false]
**RequestOnBehalfOfConfig** | Pointer to [**Requestonbehalfofconfigv2**](requestonbehalfofconfigv2) |  | [optional] 
**EntitlementRequestConfig** | Pointer to [**Entitlementrequestconfigv2**](entitlementrequestconfigv2) |  | [optional] 
**GovGroupVisibilityEnabled** | Pointer to **bool** | If this is true, requesters and requested-for users will be able to see the names of governance group members when a request is awaiting the group's approval. Up to the first 10 members of the group will be listed. | [optional] [default to false]

## Methods

### NewAccessrequestconfigv2

`func NewAccessrequestconfigv2() *Accessrequestconfigv2`

NewAccessrequestconfigv2 instantiates a new Accessrequestconfigv2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestconfigv2WithDefaults

`func NewAccessrequestconfigv2WithDefaults() *Accessrequestconfigv2`

NewAccessrequestconfigv2WithDefaults instantiates a new Accessrequestconfigv2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalsMustBeExternal

`func (o *Accessrequestconfigv2) GetApprovalsMustBeExternal() bool`

GetApprovalsMustBeExternal returns the ApprovalsMustBeExternal field if non-nil, zero value otherwise.

### GetApprovalsMustBeExternalOk

`func (o *Accessrequestconfigv2) GetApprovalsMustBeExternalOk() (*bool, bool)`

GetApprovalsMustBeExternalOk returns a tuple with the ApprovalsMustBeExternal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalsMustBeExternal

`func (o *Accessrequestconfigv2) SetApprovalsMustBeExternal(v bool)`

SetApprovalsMustBeExternal sets ApprovalsMustBeExternal field to given value.

### HasApprovalsMustBeExternal

`func (o *Accessrequestconfigv2) HasApprovalsMustBeExternal() bool`

HasApprovalsMustBeExternal returns a boolean if a field has been set.

### GetReauthorizationEnabled

`func (o *Accessrequestconfigv2) GetReauthorizationEnabled() bool`

GetReauthorizationEnabled returns the ReauthorizationEnabled field if non-nil, zero value otherwise.

### GetReauthorizationEnabledOk

`func (o *Accessrequestconfigv2) GetReauthorizationEnabledOk() (*bool, bool)`

GetReauthorizationEnabledOk returns a tuple with the ReauthorizationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationEnabled

`func (o *Accessrequestconfigv2) SetReauthorizationEnabled(v bool)`

SetReauthorizationEnabled sets ReauthorizationEnabled field to given value.

### HasReauthorizationEnabled

`func (o *Accessrequestconfigv2) HasReauthorizationEnabled() bool`

HasReauthorizationEnabled returns a boolean if a field has been set.

### GetRequestOnBehalfOfConfig

`func (o *Accessrequestconfigv2) GetRequestOnBehalfOfConfig() Requestonbehalfofconfigv2`

GetRequestOnBehalfOfConfig returns the RequestOnBehalfOfConfig field if non-nil, zero value otherwise.

### GetRequestOnBehalfOfConfigOk

`func (o *Accessrequestconfigv2) GetRequestOnBehalfOfConfigOk() (*Requestonbehalfofconfigv2, bool)`

GetRequestOnBehalfOfConfigOk returns a tuple with the RequestOnBehalfOfConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestOnBehalfOfConfig

`func (o *Accessrequestconfigv2) SetRequestOnBehalfOfConfig(v Requestonbehalfofconfigv2)`

SetRequestOnBehalfOfConfig sets RequestOnBehalfOfConfig field to given value.

### HasRequestOnBehalfOfConfig

`func (o *Accessrequestconfigv2) HasRequestOnBehalfOfConfig() bool`

HasRequestOnBehalfOfConfig returns a boolean if a field has been set.

### GetEntitlementRequestConfig

`func (o *Accessrequestconfigv2) GetEntitlementRequestConfig() Entitlementrequestconfigv2`

GetEntitlementRequestConfig returns the EntitlementRequestConfig field if non-nil, zero value otherwise.

### GetEntitlementRequestConfigOk

`func (o *Accessrequestconfigv2) GetEntitlementRequestConfigOk() (*Entitlementrequestconfigv2, bool)`

GetEntitlementRequestConfigOk returns a tuple with the EntitlementRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementRequestConfig

`func (o *Accessrequestconfigv2) SetEntitlementRequestConfig(v Entitlementrequestconfigv2)`

SetEntitlementRequestConfig sets EntitlementRequestConfig field to given value.

### HasEntitlementRequestConfig

`func (o *Accessrequestconfigv2) HasEntitlementRequestConfig() bool`

HasEntitlementRequestConfig returns a boolean if a field has been set.

### GetGovGroupVisibilityEnabled

`func (o *Accessrequestconfigv2) GetGovGroupVisibilityEnabled() bool`

GetGovGroupVisibilityEnabled returns the GovGroupVisibilityEnabled field if non-nil, zero value otherwise.

### GetGovGroupVisibilityEnabledOk

`func (o *Accessrequestconfigv2) GetGovGroupVisibilityEnabledOk() (*bool, bool)`

GetGovGroupVisibilityEnabledOk returns a tuple with the GovGroupVisibilityEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovGroupVisibilityEnabled

`func (o *Accessrequestconfigv2) SetGovGroupVisibilityEnabled(v bool)`

SetGovGroupVisibilityEnabled sets GovGroupVisibilityEnabled field to given value.

### HasGovGroupVisibilityEnabled

`func (o *Accessrequestconfigv2) HasGovGroupVisibilityEnabled() bool`

HasGovGroupVisibilityEnabled returns a boolean if a field has been set.


