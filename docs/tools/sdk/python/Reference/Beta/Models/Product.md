---
id: beta-product
title: Product
pagination_label: Product
sidebar_label: Product
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Product', 'BetaProduct'] 
slug: /tools/sdk/python/beta/models/product
tags: ['SDK', 'Software Development Kit', 'Product', 'BetaProduct']
---

# Product


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **str** | Name of the Product | [optional] 
**url** | **str** | URL of the Product | [optional] 
**product_tenant_id** | **str** | An identifier for a specific product-tenant combination | [optional] 
**product_region** | **str** | Product region | [optional] 
**product_right** | **str** | Right needed for the Product | [optional] 
**api_url** | **str** | API URL of the Product | [optional] 
**licenses** | [**[]License**](license) |  | [optional] 
**attributes** | **map[string]object** | Additional attributes for a product | [optional] 
**zone** | **str** | Zone | [optional] 
**status** | **str** | Status of the product | [optional] 
**status_date_time** | **datetime** | Status datetime | [optional] 
**reason** | **str** | If there's a tenant provisioning failure then reason will have the description of error | [optional] 
**notes** | **str** | Product could have additional notes added during tenant provisioning. | [optional] 
**date_created** | **datetime** | Date when the product was created | [optional] 
**last_updated** | **datetime** | Date when the product was last updated | [optional] 
**org_type** |  **Enum** [  'development',    'staging',    'production',    'test',    'partner',    'training',    'demonstration',    'sandbox' ] | Type of org | [optional] 
}

## Example

```python
from sailpoint.beta.models.product import Product

product = Product(
product_name='idn',
url='https://tenant-name.identitynow.com',
product_tenant_id='tenant#product',
product_region='us-east-1',
product_right='idn:ui:view',
api_url='https://tenant-name.api.identitynow.com',
licenses=[
                    sailpoint.beta.models.license.License(
                        license_id = 'idn:access-request', 
                        legacy_feature_name = 'ACCESS_REQUEST', )
                    ],
attributes={domain=https://tenant-name.identitynow.com, maxRegisteredUsers=250},
zone='Deployment zone for the Product',
status='active',
status_date_time='2020-05-19T13:49:37.385Z',
reason='Reason',
notes='Example notes',
date_created='2020-05-19T13:49:37.385Z',
last_updated='2020-05-19T13:49:37.385Z',
org_type='test'
)

```
[[Back to top]](#) 

