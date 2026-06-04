---
id: v2026-intel-identity-links
title: IntelIdentityLinks
pagination_label: IntelIdentityLinks
sidebar_label: IntelIdentityLinks
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelIdentityLinks', 'V2026IntelIdentityLinks'] 
slug: /tools/sdk/go/v2026/models/intel-identity-links
tags: ['SDK', 'Software Development Kit', 'IntelIdentityLinks', 'V2026IntelIdentityLinks']
---

# IntelIdentityLinks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | [**IntelHref**](intel-href) | Hyperlink to the Intelligence Package access document for this identity. | 
**Risk** | [**IntelHref**](intel-href) | Hyperlink to the Intelligence Package risk document for this identity. | 
**AccessHistory** | [**IntelHref**](intel-href) | Hyperlink to the Intelligence Package access history document for this identity. | 

## Methods

### NewIntelIdentityLinks

`func NewIntelIdentityLinks(access IntelHref, risk IntelHref, accessHistory IntelHref, ) *IntelIdentityLinks`

NewIntelIdentityLinks instantiates a new IntelIdentityLinks object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityLinksWithDefaults

`func NewIntelIdentityLinksWithDefaults() *IntelIdentityLinks`

NewIntelIdentityLinksWithDefaults instantiates a new IntelIdentityLinks object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccess

`func (o *IntelIdentityLinks) GetAccess() IntelHref`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *IntelIdentityLinks) GetAccessOk() (*IntelHref, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *IntelIdentityLinks) SetAccess(v IntelHref)`

SetAccess sets Access field to given value.


### GetRisk

`func (o *IntelIdentityLinks) GetRisk() IntelHref`

GetRisk returns the Risk field if non-nil, zero value otherwise.

### GetRiskOk

`func (o *IntelIdentityLinks) GetRiskOk() (*IntelHref, bool)`

GetRiskOk returns a tuple with the Risk field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRisk

`func (o *IntelIdentityLinks) SetRisk(v IntelHref)`

SetRisk sets Risk field to given value.


### GetAccessHistory

`func (o *IntelIdentityLinks) GetAccessHistory() IntelHref`

GetAccessHistory returns the AccessHistory field if non-nil, zero value otherwise.

### GetAccessHistoryOk

`func (o *IntelIdentityLinks) GetAccessHistoryOk() (*IntelHref, bool)`

GetAccessHistoryOk returns a tuple with the AccessHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessHistory

`func (o *IntelIdentityLinks) SetAccessHistory(v IntelHref)`

SetAccessHistory sets AccessHistory field to given value.



