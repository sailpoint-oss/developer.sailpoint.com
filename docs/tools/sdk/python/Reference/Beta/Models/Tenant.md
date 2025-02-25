---
id: beta-tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tenant', 'BetaTenant'] 
slug: /tools/sdk/python/beta/models/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant', 'BetaTenant']
---

# Tenant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier for the Tenant | [optional] [readonly] 
**name** | **str** | Abbreviated name of the Tenant | [optional] 
**full_name** | **str** | Human-readable name of the Tenant | [optional] 
**pod** | **str** | Deployment pod for the Tenant | [optional] 
**region** | **str** | Deployment region for the Tenant | [optional] 
**description** | **str** | Description of the Tenant | [optional] 
**products** | [**[]Product**](product) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.tenant import Tenant

tenant = Tenant(
id='2c91808568c529c60168cca6f90c1324',
name='acme',
full_name='Acme, Inc',
pod='example-pod',
region='us-east-1',
description='Description of the Tenant',
products=[
                    sailpoint.beta.models.product.Product(
                        product_name = 'idn', 
                        url = 'https://tenant-name.identitynow.com', 
                        product_tenant_id = 'tenant#product', 
                        product_region = 'us-east-1', 
                        product_right = 'idn:ui:view', 
                        api_url = 'https://tenant-name.api.identitynow.com', 
                        licenses = [
                            sailpoint.beta.models.license.License(
                                license_id = 'idn:access-request', 
                                legacy_feature_name = 'ACCESS_REQUEST', )
                            ], 
                        attributes = {domain=https://tenant-name.identitynow.com, maxRegisteredUsers=250}, 
                        zone = 'Deployment zone for the Product', 
                        status = 'active', 
                        status_date_time = '2020-05-19T13:49:37.385Z', 
                        reason = 'Reason', 
                        notes = 'Example notes', 
                        date_created = '2020-05-19T13:49:37.385Z', 
                        last_updated = '2020-05-19T13:49:37.385Z', 
                        org_type = 'test', )
                    ]
)

```
[[Back to top]](#) 

