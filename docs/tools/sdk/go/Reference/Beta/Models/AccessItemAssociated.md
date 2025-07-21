---
id: beta-access-item-associated
title: AccessItemAssociated
pagination_label: AccessItemAssociated
sidebar_label: AccessItemAssociated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemAssociated', 'BetaAccessItemAssociated'] 
slug: /tools/sdk/go/beta/models/access-item-associated
tags: ['SDK', 'Software Development Kit', 'AccessItemAssociated', 'BetaAccessItemAssociated']
---

# AccessItemAssociated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItem** | Pointer to [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**EventType** | Pointer to **string** | the event type | [optional] 
**Dt** | Pointer to **string** | the date of event | [optional] 
**GovernanceEvent** | Pointer to [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [optional] 

## Methods

### NewAccessItemAssociated

`func NewAccessItemAssociated() *AccessItemAssociated`

NewAccessItemAssociated instantiates a new AccessItemAssociated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemAssociatedWithDefaults

`func NewAccessItemAssociatedWithDefaults() *AccessItemAssociated`

NewAccessItemAssociatedWithDefaults instantiates a new AccessItemAssociated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessItem

`func (o *AccessItemAssociated) GetAccessItem() AccessItemAssociatedAccessItem`

GetAccessItem returns the AccessItem field if non-nil, zero value otherwise.

### GetAccessItemOk

`func (o *AccessItemAssociated) GetAccessItemOk() (*AccessItemAssociatedAccessItem, bool)`

GetAccessItemOk returns a tuple with the AccessItem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItem

`func (o *AccessItemAssociated) SetAccessItem(v AccessItemAssociatedAccessItem)`

SetAccessItem sets AccessItem field to given value.

### HasAccessItem

`func (o *AccessItemAssociated) HasAccessItem() bool`

HasAccessItem returns a boolean if a field has been set.

### GetIdentityId

`func (o *AccessItemAssociated) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AccessItemAssociated) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AccessItemAssociated) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *AccessItemAssociated) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEventType

`func (o *AccessItemAssociated) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AccessItemAssociated) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AccessItemAssociated) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AccessItemAssociated) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDt

`func (o *AccessItemAssociated) GetDt() string`

GetDt returns the Dt field if non-nil, zero value otherwise.

### GetDtOk

`func (o *AccessItemAssociated) GetDtOk() (*string, bool)`

GetDtOk returns a tuple with the Dt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDt

`func (o *AccessItemAssociated) SetDt(v string)`

SetDt sets Dt field to given value.

### HasDt

`func (o *AccessItemAssociated) HasDt() bool`

HasDt returns a boolean if a field has been set.

### GetGovernanceEvent

`func (o *AccessItemAssociated) GetGovernanceEvent() CorrelatedGovernanceEvent`

GetGovernanceEvent returns the GovernanceEvent field if non-nil, zero value otherwise.

### GetGovernanceEventOk

`func (o *AccessItemAssociated) GetGovernanceEventOk() (*CorrelatedGovernanceEvent, bool)`

GetGovernanceEventOk returns a tuple with the GovernanceEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceEvent

`func (o *AccessItemAssociated) SetGovernanceEvent(v CorrelatedGovernanceEvent)`

SetGovernanceEvent sets GovernanceEvent field to given value.

### HasGovernanceEvent

`func (o *AccessItemAssociated) HasGovernanceEvent() bool`

HasGovernanceEvent returns a boolean if a field has been set.


