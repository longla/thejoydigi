## TikTok Integration Environment Variables

### `TIKTOK_DEMO`

*   **Purpose**: Controls the behavior of the TikTok OAuth callback for demonstration and app review purposes.
*   **Values**:
    *   `true`: After a successful TikTok OAuth callback, the application will redirect to the `/tiktok-content` page. This page displays a list of demo videos with a mock "Share to TikTok" functionality, suitable for app review processes where live sharing is not required.
    *   `false` (or not set): After a successful TikTok OAuth callback, the application will redirect to the `/tiktok-tokens` page, which displays the obtained access and refresh tokens. This is the standard behavior.
*   **Usage**: This variable is read server-side in the `/api/tiktok/callback` API route.
*   **Example**:
    ```
    TIKTOK_DEMO=true
    ```

### `NEXT_PUBLIC_TIKTOK_CLIENT_KEY`

*   **Purpose**: Your TikTok application's Client Key.
*   **Values**: The actual client key provided by TikTok for your app.
*   **Usage**: Used both client-side (e.g., `tiktok-auth.tsx`) and server-side (e.g., `api/tiktok/callback.ts`). Must be prefixed with `NEXT_PUBLIC_` to be available on the client side.
*   **Example**:
    ```
    NEXT_PUBLIC_TIKTOK_CLIENT_KEY=your_actual_tiktok_client_key
    ```

### `TIKTOK_CLIENT_SECRET`

*   **Purpose**: Your TikTok application's Client Secret.
*   **Values**: The actual client secret provided by TikTok for your app.
*   **Usage**: Used server-side (e.g., `api/tiktok/callback.ts`) for exchanging the authorization code for an access token.
*   **Example**:
    ```
    TIKTOK_CLIENT_SECRET=your_actual_tiktok_client_secret
    ```

### `NEXT_PUBLIC_TIKTOK_SCOPES`

*   **Purpose**: Defines the permissions your application requests from TikTok.
*   **Values**: A comma-separated string of scopes (e.g., `user.info.basic,video.list`).
*   **Usage**: Used client-side (`tiktok-auth.tsx`) when initiating the authorization request. Must be prefixed with `NEXT_PUBLIC_`.
*   **Example**:
    ```
    NEXT_PUBLIC_TIKTOK_SCOPES=user.info.basic,video.upload
    ```

## Interest Topics Management (S3)

These variables configure the AWS S3 bucket used to store the `interests.json` file.

```
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your_bucket
INTERESTS_KEY=interests.json # optional
```
