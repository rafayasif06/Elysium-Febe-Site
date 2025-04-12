// src/app/(studio)/studio/[[...tool]]/layout.tsx
import { metadata, viewport } from 'next-sanity/studio';

export { metadata, viewport };

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ height: '100vh' }}>{children}</div>
      </body>
    </html>
  );
}
