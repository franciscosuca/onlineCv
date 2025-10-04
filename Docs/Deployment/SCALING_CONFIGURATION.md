# Container Apps Scaling Configuration Update

## Cost Impact of Your Requested Settings

**Good news: Your requested settings will NOT increase costs and may actually reduce them!**

### Settings Requested:
- **Cooldown period**: 120 seconds (time to wait before scaling down)
- **Polling interval**: 5 seconds (how often to check metrics)

### Cost Impact:
✅ **No additional cost** - These are configuration settings only
✅ **May reduce costs** - Faster scaling down means less idle time
✅ **Better responsiveness** - More frequent polling means faster scale-up when needed

## Updated Azure CLI Commands

When creating your Container App, use these commands with the scaling configuration:

```bash
# Create the container app with optimized scaling settings
az containerapp create \
  --name "your-app-name" \
  --resource-group "your-resource-group" \
  --environment "your-container-env" \
  --image "your-registry/your-image:latest" \
  --target-port 80 \
  --ingress external \
  --cpu 0.25 \
  --memory 0.5Gi \
  --min-replicas 0 \
  --max-replicas 2 \
  --env-vars \
    COSMOS_CONNECTION_STRING="your-cosmos-connection-string" \
    COSMOS_DATABASE="your-database" \
    COSMOS_CONTAINER="your-container"

# Configure scaling behavior (after creation)
az containerapp revision set-active \
  --name "your-app-name" \
  --resource-group "your-resource-group" \
  --revision-name "$(az containerapp revision list --name your-app-name --resource-group your-resource-group --query '[0].name' -o tsv)"

# Update scaling configuration via ARM template or through Azure Portal
# Note: Fine-grained scaling intervals are best configured through Azure Portal
```

## Alternative: Configure via Azure Portal

For precise control over cooldown and polling intervals:

1. Go to Azure Portal → Container Apps
2. Select your app → Scale and replicas
3. Set **Scale rule** with:
   - **Metric**: HTTP requests
   - **Target value**: 10 concurrent requests
   - **Cool down period**: 120 seconds
   - **Polling interval**: 5 seconds

## How These Settings Work

### Cooldown Period (120 seconds):
- After scaling up, waits 120 seconds before considering scaling down
- Prevents rapid scaling fluctuations
- **Cost benefit**: Avoids premature scale-down during brief traffic lulls

### Polling Interval (5 seconds):
- Checks metrics every 5 seconds
- Default is usually 30 seconds
- **Benefit**: Faster response to traffic spikes
- **Cost**: No additional cost - just configuration

## Expected Behavior

With these settings:
1. **Scale up**: ~5-10 seconds response time to traffic spikes
2. **Scale down**: Waits 120 seconds after traffic decreases before scaling to zero
3. **Cost**: Only pay for actual usage time, potentially less due to optimized scaling

Your GitHub workflow is already configured with the basic scaling rules. The fine-tuned intervals are best set through the Azure Portal for maximum control.