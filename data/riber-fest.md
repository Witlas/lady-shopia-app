# Riber Fest collection

`riber-fest.json` supplies `/riber-fest/vol-3` and its homepage feature. All current product records, prices, sizes, and illustrations are demo content. Ordering is not implemented. The preview page is marked noindex.

Prices are numeric Indonesian rupiah amounts, not formatted strings. Product `slug` values are stable fragment destinations, e.g. `/riber-fest/vol-3#official-lineup-t-shirt`. Keep these stable when replacing the sample content.

## Later import from Riber

| Riber field | JSON field |
| --- | --- |
| `id` | `sourceId` (currently null; keep the local `id` stable) |
| `nama` | `name` |
| `foto_url` | `images[0].src`; supply descriptive `alt` text |
| `harga` | `price`, converted to a nonnegative number |
| `urutan` | Product array order |
| `volume_id` | Filter the export to Vol. 3 before importing |

`description`, `category`, and `variants` need editorial/merchant input. Variant records use the existing catalog shape: `slug`, `name`, and numeric `price`; an empty array means no size choices. Missing price/image values must be resolved before publication. Remote images need their exact host/path allowed in `next.config.ts`, or can be copied into `public/riber-fest`.

Do not import Riber's `link`: it currently points to WhatsApp. No Riber API, database credentials, or synchronization are connected here. Update the order links in Riber separately to the final Lady Shopia destinations.

Set `isDemo` to false only after replacing and verifying sample content. Changing this flag only removes the demo notice. Ordering requires a separate implementation. Remove the page's noindex metadata when the real collection is ready to publish.
