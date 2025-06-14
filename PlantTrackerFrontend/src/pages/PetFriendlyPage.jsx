import React from 'react';
import { Link } from 'react-router-dom';

function PetFriendlyPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <header className="bg-white shadow-md relative">
        {/* Top-left image */}
        <img
          src="/leo.png"
          alt="Leo Logo"
          className="absolute top-4 left-4 w-14 h-14 md:w-20 md:h-20"
        />

        {/* Top-right image */}
        <img
          src="/seedsticker8.png"
          alt="Seed Sticker"
          className="absolute top-4 right-4 w-14 h-14 md:w-20 md:h-20"
        />

        <div className="container mx-auto px-6 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text">
            The Seeds Guide to Pet-Friendly Plants
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Here at the seed we believe in creating safe and beautiful spaces for both plants and pets. This guide focuses on pet-friendly plants that thrive in the Pacific Northwest.
          </p>
          <p>Knowledge about Safe, Toxic, or Poisonous plants is essential to Keeping our Loved ones Safe! </p>
          <Link
            to="/"
            className="mt-6 inline-block bg-green-400 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ← The Garden is This Way!
          </Link>
        </div>
      </header>

            <main className="container mx-auto p-4 md:p-8">
                <section id="matlock-focus" className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Pacific Northwest</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-x-auto mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pet-Friendly Plants for Matlock, WA</h3>
                        <p className="text-gray-600 mb-6">The following plants are native or thrive in the Matlock area and are confirmed pet-friendly. They offer a great way to build a beautiful local landscape without compromising on safety.</p>
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Common Name</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Scientific Name</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Western Red Cedar</td>
                                    <td className="p-3 border-b border-gray-200 italic">Thuja plicata</td>
                                    <td className="p-3 border-b border-gray-200">Tree</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Salal</td>
                                    <td className="p-3 border-b border-gray-200 italic">Gaultheria shallon</td>
                                    <td className="p-3 border-b border-gray-200">Native Shrub</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Sword Fern (Western Sword Fern)</td>
                                    <td className="p-3 border-b border-gray-200 italic">Polystichum munitum</td>
                                    <td className="p-3 border-b border-gray-200">Native Fern</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Oregon Grape</td>
                                    <td className="p-3 border-b border-gray-200 italic">Mahonia aquifolium</td>
                                    <td className="p-3 border-b border-gray-200">Native Shrub</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Black Hawthorn</td>
                                    <td className="p-3 border-b border-gray-200 italic">Crataegus douglasii</td>
                                    <td className="p-3 border-b border-gray-200">Native Shrub</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Woolly Sunflower</td>
                                    <td className="p-3 border-b border-gray-200 italic">Eriophyllum lanatum</td>
                                    <td className="p-3 border-b border-gray-200">Native Perennial</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">White-top Aster</td>
                                    <td className="p-3 border-b border-gray-200 italic">Aster playpetala</td>
                                    <td className="p-3 border-b border-gray-200">Native Perennial</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Spikelike Goldenrod</td>
                                    <td className="p-3 border-b border-gray-200 italic">Solidago spathulata</td>
                                    <td className="p-3 border-b border-gray-200">Native Perennial</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Early Blue Violet</td>
                                    <td className="p-3 border-b border-gray-200 italic">Viola adunca</td>
                                    <td className="p-3 border-b border-gray-200">Native Perennial</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Slender Cinquefoil</td>
                                    <td className="p-3 border-b border-gray-200 italic">Potentilla gracilis</td>
                                    <td className="p-3 border-b border-gray-200">Native Perennial</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Beach Strawberry</td>
                                    <td className="p-3 border-b border-gray-200 italic">Fragaria chiloensis</td>
                                    <td className="p-3 border-b border-gray-200">Native Groundcover</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Sea Purslane</td>
                                    <td className="p-3 border-b border-gray-200 italic">Honckenya peploides</td>
                                    <td className="p-3 border-b border-gray-200">Native Perennial</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Yellow Sand Verbena</td>
                                    <td className="p-3 border-b border-gray-200 italic">Abronia latifolia</td>
                                    <td className="p-3 border-b border-gray-200">Native Perennial</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Japanese Bamboo</td>
                                    <td className="p-3 border-b border-gray-200 italic">Pseudosasa japonica</td>
                                    <td className="p-3 border-b border-gray-200">Grass</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-x-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Toxic Plants for Matlock, WA (Mason County)</h3>
                        <p className="text-gray-600 mb-6">While some of these are native, their toxicity means they should be avoided or managed carefully in pet-accessible areas.</p>
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Common Name</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Scientific Name</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Toxicity Level</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Prairie Lupine</td>
                                    <td className="p-3 border-b border-gray-200 italic">Lupinus lepidus</td>
                                    <td className="p-3 border-b border-gray-200">Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Native to Mason County prairies; confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Western Buttercup</td>
                                    <td className="p-3 border-b border-gray-200 italic">Ranunculus occidentalis</td>
                                    <td className="p-3 border-b border-gray-200">Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Native to Mason County prairies; confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Yarrow</td>
                                    <td className="p-3 border-b border-gray-200 italic">Achillea millefolium</td>
                                    <td className="p-3 border-b border-gray-200">Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Native to Mason County prairies; confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Brackenfern</td>
                                    <td className="p-3 border-b border-gray-200 italic">Pteridium aquilinum</td>
                                    <td className="p-3 border-b border-gray-200">Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Native to Mason County; confirmed toxic by Lakemont Vet</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Boxwood</td>
                                    <td className="p-3 border-b border-gray-200 italic">Buxus spp.</td>
                                    <td className="p-3 border-b border-gray-200">Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Common hedge in PNW; confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Red Maple</td>
                                    <td className="p-3 border-b border-gray-200 italic">Acer rubrum</td>
                                    <td className="p-3 border-b border-gray-200">Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Common in PNW; confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">English Ivy</td>
                                    <td className="p-3 border-b border-gray-200 italic">Hedera helix</td>
                                    <td className="p-3 border-b border-gray-200">Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Common in PNW; confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Hydrangea</td>
                                    <td className="p-3 border-b border-gray-200 italic">Hydrangea arborescens</td>
                                    <td className="p-3 border-b border-gray-200">Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Common in PNW; confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Poinsettia</td>
                                    <td className="p-3 border-b border-gray-200 italic">Euphorbia pulcherrima</td>
                                    <td className="p-3 border-b border-gray-200">Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Common in PNW; confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Azalea / Rhododendron</td>
                                    <td className="p-3 border-b border-gray-200 italic">Rhododendron spp.</td>
                                    <td className="p-3 border-b border-gray-200">Highly Poisonous</td>
                                    <td className="p-3 border-b border-gray-200">Common in PNW; can be fatal if ingested</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Daffodil</td>
                                    <td className="p-3 border-b border-gray-200 italic">Narcissus spp.</td>
                                    <td className="p-3 border-b border-gray-200">Highly Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Common in PNW; bulbs are particularly toxic</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Lily of the Valley</td>
                                    <td className="p-3 border-b border-gray-200 italic">Convallaria majalis</td>
                                    <td className="p-3 border-b border-gray-200">Highly Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Common in PNW; can cause cardiac issues</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Tulip</td>
                                    <td className="p-3 border-b border-gray-200 italic">Tulipa spp.</td>
                                    <td className="p-3 border-b border-gray-200">Toxic</td>
                                    <td className="p-3 border-b border-gray-200">Common in PNW; bulbs are toxic</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Yew</td>
                                    <td className="p-3 border-b border-gray-200 italic">Taxus spp.</td>
                                    <td className="p-3 border-b border-gray-200">Highly Poisonous</td>
                                    <td className="p-3 border-b border-gray-200">Common in PNW; can cause cardiac failure and death</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="all-safe-plants" className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-x-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">All Pet-Friendly Plants</h2>
                            <p className="mt-2 text-md text-gray-600 max-w-3xl mx-auto">This comprehensive list includes plants generally considered non-toxic to pets, combining your initial selections with additional safe options for Washington State gardens.</p>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Common Name</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Scientific Name</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Alyssum</td>
                                    <td className="p-3 border-b border-gray-200 italic">Alyssum spp.</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Blue Daisy</td>
                                    <td className="p-3 border-b border-gray-200 italic">Felicia amelloides</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Boston Fern</td>
                                    <td className="p-3 border-b border-gray-200 italic">Nephrolepis exalta bostoniensis</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Bottlebrush Tree</td>
                                    <td className="p-3 border-b border-gray-200 italic">Callistemon species</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Camellia</td>
                                    <td className="p-3 border-b border-gray-200 italic">Camellia japonica</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA; good for PNW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Canna</td>
                                    <td className="p-3 border-b border-gray-200 italic">Canna indica</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Celosia Plumosa</td>
                                    <td className="p-3 border-b border-gray-200 italic">Celosia plumosa</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Christmas Cactus</td>
                                    <td className="p-3 border-b border-gray-200 italic">Schlumbergera bridgesii</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Coreopsis</td>
                                    <td className="p-3 border-b border-gray-200 italic">Coreopsis spp.</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA; dog-friendly</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Echevaria Succulents</td>
                                    <td className="p-3 border-b border-gray-200 italic">Echeveria spp.</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Gerber Daisy</td>
                                    <td className="p-3 border-b border-gray-200 italic">Gerbera jamesonii</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Gloxinia</td>
                                    <td className="p-3 border-b border-gray-200 italic">Sinningia speciosa</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Impatiens</td>
                                    <td className="p-3 border-b border-gray-200 italic">Impatiens spp.</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA; safe for dogs</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Marigold</td>
                                    <td className="p-3 border-b border-gray-200 italic">Calendula officinalis</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Nasturtium</td>
                                    <td className="p-3 border-b border-gray-200 italic">Tropaeolum majus</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA; dog-friendly</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Pampas Grass</td>
                                    <td className="p-3 border-b border-gray-200 italic">Cortaderia selloana</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Persian Violet</td>
                                    <td className="p-3 border-b border-gray-200 italic">Exacum affine</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Petunia</td>
                                    <td className="p-3 border-b border-gray-200 italic">Petunia species</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA; safe for dogs</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Polkadot Plant</td>
                                    <td className="p-3 border-b border-gray-200 italic">Hypoestes phyllostachya</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Rose</td>
                                    <td className="p-3 border-b border-gray-200 italic">Rosa Species</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Snap Dragons</td>
                                    <td className="p-3 border-b border-gray-200 italic">Antirrhinum majus</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Spider Plant</td>
                                    <td className="p-3 border-b border-gray-200 italic">Chlorophytum comosum</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Star Jasmine</td>
                                    <td className="p-3 border-b border-gray-200 italic">Trachelospermum jasminoides</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Sunflower</td>
                                    <td className="p-3 border-b border-gray-200 italic">Helianthus angustifolius</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA; safe for dogs</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Sword Fern</td>
                                    <td className="p-3 border-b border-gray-200 italic">Nephrolepis biserrata</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Viola</td>
                                    <td className="p-3 border-b border-gray-200 italic">Viola species</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Zinnia</td>
                                    <td className="p-3 border-b border-gray-200 italic">Zinnia species</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Abelia</td>
                                    <td className="p-3 border-b border-gray-200 italic">Abelia spp.</td>
                                    <td className="p-3 border-b border-gray-200">Hardy shrub, tolerates dog urine</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Astilbe (False Goat's Beard)</td>
                                    <td className="p-3 border-b border-gray-200 italic">Astilbe spp.</td>
                                    <td className="p-3 border-b border-gray-200">Tolerates paw traffic</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Basil</td>
                                    <td className="p-3 border-b border-gray-200 italic">Ocimum basilicum</td>
                                    <td className="p-3 border-b border-gray-200">Organically grown edible herb; confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Cypresses</td>
                                    <td className="p-3 border-b border-gray-200 italic">Cupressus spp.</td>
                                    <td className="p-3 border-b border-gray-200">Good hedge option</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Dill</td>
                                    <td className="p-3 border-b border-gray-200 italic">Anethum graveolena</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Echinacea</td>
                                    <td className="p-3 border-b border-gray-200 italic">Echinacea spp.</td>
                                    <td className="p-3 border-b border-gray-200">Tolerates paw traffic</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Fuchsia</td>
                                    <td className="p-3 border-b border-gray-200 italic">Fuchsia spp.</td>
                                    <td className="p-3 border-b border-gray-200">Safe for dogs; confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Goat's Beard</td>
                                    <td className="p-3 border-b border-gray-200 italic">Aruncus dioicus</td>
                                    <td className="p-3 border-b border-gray-200">Tolerates paw traffic</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Hibiscus</td>
                                    <td className="p-3 border-b border-gray-200 italic">Hibiscus syriacus</td>
                                    <td className="p-3 border-b border-gray-200">ASPCA lists common varieties as non-toxic. (User's original list had as "Toxic")</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Japanese Aralia</td>
                                    <td className="p-3 border-b border-gray-200 italic">Fatsia japonica</td>
                                    <td className="p-3 border-b border-gray-200">Dog-friendly; confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Magnolias</td>
                                    <td className="p-3 border-b border-gray-200 italic">Magnolia spp.</td>
                                    <td className="p-3 border-b border-gray-200">Good choice for PNW</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Pansy</td>
                                    <td className="p-3 border-b border-gray-200 italic">Viola spp.</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA and WSU; safe for dogs. (User's original list had as "Toxic")</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Plumbago</td>
                                    <td className="p-3 border-b border-gray-200 italic">Ceratostigma spp.</td>
                                    <td className="p-3 border-b border-gray-200">ASPCA lists common varieties as non-toxic. (User's original list had as "Toxic")</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Red Hot Pokers (Torch Lily)</td>
                                    <td className="p-3 border-b border-gray-200 italic">Kniphophia spp.</td>
                                    <td className="p-3 border-b border-gray-200">Tolerates paw traffic; confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Rocky Mountain Juniper</td>
                                    <td className="p-3 border-b border-gray-200 italic">Juniperus scopulorum</td>
                                    <td className="p-3 border-b border-gray-200">Good hedge option</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Rosemary</td>
                                    <td className="p-3 border-b border-gray-200 italic">Rosmarinus officinalis</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed non-toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Rudbeckia</td>
                                    <td className="p-3 border-b border-gray-200 italic">Rudbeckia spp.</td>
                                    <td className="p-3 border-b border-gray-200">Tolerates paw traffic</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Salal</td>
                                    <td className="p-3 border-b border-gray-200 italic">Gaultheria shallon</td>
                                    <td className="p-3 border-b border-gray-200">Hardy native; WSU lists as safe</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="unsafe-plants" className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-x-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">Unsafe Plants (Toxic)</h2>
                            <p className="mt-2 text-md text-gray-600 max-w-3xl mx-auto">These plants can cause adverse health reactions, ranging from mild irritation to more moderate symptoms, if ingested by pets. Exercise caution and keep them out of reach.</p>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Common Name</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Scientific Name</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Aloe</td>
                                    <td className="p-3 border-b border-gray-200 italic">Aloe vera</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200 italic">Begonia spp.</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Bird Of Paradise</td>
                                    <td className="p-3 border-b border-gray-200 italic">Strelitzia reginae</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Bougainvillea</td>
                                    <td className="p-3 border-b border-gray-200 italic">Bougainvillea spp.</td>
                                    <td className="p-3 border-b border-gray-200">Not explicitly listed as toxic by ASPCA; mild GI upset possible.</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Calla Lily</td>
                                    <td className="p-3 border-b border-gray-200 italic">Zantedeschia aethiopica</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Carnation</td>
                                    <td className="p-3 border-b border-gray-200 italic">Dianthus caryophyllus</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Chrysanthemum</td>
                                    <td className="p-3 border-b border-gray-200 italic">Chrysanthemum spp.</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Coleus</td>
                                    <td className="p-3 border-b border-gray-200 italic">Coleus ampoinicus</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Cosmos</td>
                                    <td className="p-3 border-b border-gray-200 italic">Cosmos spp.</td>
                                    <td className="p-3 border-b border-gray-200">Not explicitly listed as toxic by ASPCA; mild GI upset possible.</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Dumb Cane</td>
                                    <td className="p-3 border-b border-gray-200 italic">Dieffenbachia</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Elephant Ear</td>
                                    <td className="p-3 border-b border-gray-200 italic">Caladium hortulanum, Colocasia esculenta</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Fleabane</td>
                                    <td className="p-3 border-b border-gray-200 italic">Erigeron speciosus</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Gardenia</td>
                                    <td className="p-3 border-b border-gray-200 italic">Gardenia jasminoides</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Geranium</td>
                                    <td className="p-3 border-b border-gray-200 italic">Pelargonium species</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Hydrangea</td>
                                    <td className="p-3 border-b border-gray-200 italic">Hydrangea arborescens</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Iris</td>
                                    <td className="p-3 border-b border-gray-200 italic">Iris species</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Mother-in-Law's Tongue</td>
                                    <td className="p-3 border-b border-gray-200 italic">Sansevieria trifasciata</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Peace Lily</td>
                                    <td className="p-3 border-b border-gray-200 italic">Spathiphyllum</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Pink Dianthus</td>
                                    <td className="p-3 border-b border-gray-200 italic">Dianthus caryophyllus</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Primrose</td>
                                    <td className="p-3 border-b border-gray-200 italic">Primula vulgaris</td>
                                    <td className="p-3 border-b border-gray-200">Confirmed toxic by ASPCA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="highly-toxic-plants" className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-x-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">Highly Toxic Plants (Poisonous)</h2>
                            <p className="mt-2 text-md text-gray-600 max-w-3xl mx-auto">These plants contain potent toxins that can lead to severe illness, significant organ damage, or even fatality, even when ingested in small amounts. Immediate veterinary intervention is typically necessary.</p>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Common Name</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Scientific Name</th>
                                    <th className="p-3 font-semibold text-sm text-gray-700 border-b">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Azalea</td>
                                    <td className="p-3 border-b border-gray-200 italic">Rhododendron spp.</td>
                                    <td className="p-3 border-b border-gray-200">Can be fatal if ingested</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Castor Bean</td>
                                    <td className="p-3 border-b border-gray-200 italic">Ricinus communis</td>
                                    <td className="p-3 border-b border-gray-200">Contains ricin, a highly fatal protein</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Cyclamen</td>
                                    <td className="p-3 border-b border-gray-200 italic">Cyclamen spp.</td>
                                    <td className="p-3 border-b border-gray-200">Can cause intense vomiting; fatalities reported</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Daffodil</td>
                                    <td className="p-3 border-b border-gray-200 italic">Narcissus spp.</td>
                                    <td className="p-3 border-b border-gray-200">Bulbs are particularly toxic</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Easter Lily / Star Gazer Lily / Tiger Lily</td>
                                    <td className="p-3 border-b border-gray-200 italic">Lilium spp.</td>
                                    <td className="p-3 border-b border-gray-200">Highly toxic to cats, causing severe kidney damage; also toxic to dogs</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 border-b border-gray-200">Sago Palm</td>
                                    <td className="p-3 border-b border-gray-200 italic">Cycas revoluta</td>
                                    <td className="p-3 border-b border-gray-200">Can cause liver failure; even small amounts are dangerous</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="toxicity-levels" className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Understanding Plant Safety Classifications</h2>
                        <p className="mt-2 text-md text-gray-600 max-w-2xl mx-auto">To effectively manage a pet-friendly plant collection, it is essential to distinguish between various levels of plant toxicity.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-">
                            <span className="text-5xl">🐾</span>
                            <h3 className="text-2xl font-bold mt-4" style={{ color: '#00A0B0' }}>Pet-Friendly</h3>
                            <p className="mt-2 text-gray-600">These plants are generally considered non-toxic to pets. While consuming any plant material in large quantities might lead to mild gastrointestinal upset, these plants are not expected to cause life-threatening issues.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-">
                            <span className="text-5xl">⚠️</span>
                            <h3 className="text-2xl font-bold mt-4" style={{ color: '#EB6841' }}>Toxic</h3>
                            <p className="mt-2 text-gray-600">Plants categorized as toxic can induce adverse health reactions if ingested. The severity of symptoms can vary widely, ranging from mild oral irritation and drooling to more moderate issues. The specific part of the plant consumed and the quantity ingested often determine the intensity of the reaction.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-[#CC333F]">
                            <span className="text-5xl">☠️</span>
                            <h3 className="text-2xl font-bold mt-4" style={{ color: '#CC333F' }}>Poisonous</h3>
                            <p className="mt-2 text-gray-600">This classification is reserved for plants containing highly potent toxins that can lead to severe illness, significant organ damage, or even fatality, even when ingested in small amounts. Exposure to these plants typically necessitates immediate veterinary intervention.</p>
                        </div>
                    </div>
                </section>

                <section id="safety-rules" className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Essential Pet Safety Rules</h2>
                        <p className="mt-2 text-md text-gray-600 max-w-2xl mx-auto">Beyond choosing the right plants, follow these crucial guidelines to ensure a safe environment for your pets at all times.</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg- text-white flex items-center justify-center text-xl font-bold">1</div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold">Verify with Scientific Names</h4>
                                    <p className="mt-1 text-gray-600">Common names can be misleading. Always confirm a plant's identity and toxicity using its scientific name to avoid dangerous mix-ups.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg- text-white flex items-center justify-center text-xl font-bold">2</div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold">Keep Plants Out of Reach</h4>
                                    <p className="mt-1 text-gray-600">The simplest prevention is placement. Use high shelves, hanging baskets, or dedicated pet-free rooms to keep all plants inaccessible.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg- text-white flex items-center justify-center text-xl font-bold">3</div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold">Clean Up Debris</h4>
                                    <p className="mt-1 text-gray-600">Fallen leaves, flowers, and stems can still be toxic. Regularly sweep and dispose of plant debris to minimize the risk of accidental ingestion.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#CC333F] text-white flex items-center justify-center text-xl font-bold">4</div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold">Have an Emergency Contact</h4>
                                    <p className="mt-1 text-gray-600">In case of suspected poisoning, time is critical. Keep the ASPCA Animal Poison Control Center hotline (1-888-426-4435) readily available.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white mt-16">
                <div className="container mx-auto px-6 py-8 text-center">
                    <p>This infographic is a guide based on data from the ASPCA and WSU Extension. It is not a substitute for professional veterinary advice.</p>
                </div>
            </footer>
        </div>
  );
}

export default PetFriendlyPage;
